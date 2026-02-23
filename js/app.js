// Main Application Controller
export const App = {
    state: {
        currentRoute: 'home',
        currentUtility: null,
        theme: localStorage.getItem('theme') || 'light',
        favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
        recentlyUsed: JSON.parse(localStorage.getItem('recentlyUsed') || '[]'),
        settings: JSON.parse(localStorage.getItem('settings') || '{}'),
        searchQuery: '',
        selectedCategory: 'all',
        loadedUtilities: new Map()
    },

    // Initialize Application
    init() {
        this.setupTheme();
        this.setupRouter();
        this.setupEventListeners();
        this.loadRoute(this.getCurrentRoute());
        this.checkCapabilities();
    },

    // Theme Management
    setupTheme() {
        document.documentElement.setAttribute('data-theme', this.state.theme);
    },

    toggleTheme() {
        const themes = ['light', 'dark', 'high-contrast'];
        const currentIndex = themes.indexOf(this.state.theme);
        this.state.theme = themes[(currentIndex + 1) % themes.length];
        localStorage.setItem('theme', this.state.theme);
        this.setupTheme();
    },

    // Router
    setupRouter() {
        window.addEventListener('hashchange', () => {
            this.loadRoute(this.getCurrentRoute());
        });

        window.addEventListener('popstate', () => {
            this.loadRoute(this.getCurrentRoute());
        });
    },

    getCurrentRoute() {
        const hash = window.location.hash.slice(1);
        return hash || 'home';
    },

    navigate(route) {
        window.location.hash = route;
    },

    async loadRoute(route) {
        const [page, ...params] = route.split('/');
        this.state.currentRoute = page;

        const app = document.getElementById('app');

        // Show loading state
        app.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

        try {
            switch (page) {
                case 'home':
                    await this.renderHome(app);
                    break;
                case 'tool':
                    await this.renderUtility(app, params[0]);
                    break;
                case 'category':
                    await this.renderCategory(app, params[0]);
                    break;
                case 'about':
                    this.renderAbout(app);
                    break;
                case 'settings':
                    this.renderSettings(app);
                    break;
                case 'data':
                    this.renderData(app);
                    break;
                case 'system':
                    this.renderSystem(app);
                    break;
                default:
                    await this.renderHome(app);
            }
        } catch (error) {
            console.error('Route loading error:', error);
            app.innerHTML = `
                <div class="error-message">
                    <h2>Error loading page</h2>
                    <p>${error.message}</p>
                    <button class="btn btn-primary" onclick="App.navigate('home')">Go Home</button>
                </div>
            `;
        }
    },

    // Event Listeners
    setupEventListeners() {
        document.addEventListener('click', (e) => {
            // Route navigation
            if (e.target.hasAttribute('data-route')) {
                e.preventDefault();
                this.navigate(e.target.getAttribute('data-route'));
            }

            // Utility navigation
            if (e.target.closest('[data-utility]')) {
                e.preventDefault();
                const utilityId = e.target.closest('[data-utility]').getAttribute('data-utility');
                this.navigate(`tool/${utilityId}`);
            }

            // Category filter
            if (e.target.hasAttribute('data-category')) {
                e.preventDefault();
                const category = e.target.getAttribute('data-category');
                this.state.selectedCategory = category;
                this.renderHome(document.getElementById('app'));
            }

            // Favorite toggle
            if (e.target.closest('.favorite-btn')) {
                const utilityId = e.target.closest('.favorite-btn').getAttribute('data-favorite');
                this.toggleFavorite(utilityId);
            }
        });

        // Surprise button
        const surpriseBtn = document.getElementById('surprise-btn');
        if (surpriseBtn) {
            surpriseBtn.addEventListener('click', async () => {
                const { UtilityRegistry } = await import('./registry.js');
                const utilities = UtilityRegistry.getAllUtilities();
                const randomUtility = utilities[Math.floor(Math.random() * utilities.length)];
                this.navigate(`tool/${randomUtility.id}`);
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K for search focus
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.querySelector('.search-input');
                if (searchInput) searchInput.focus();
            }

            // Escape to close modals
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    },

    // Render Methods
    async renderHome(container) {
        const { UtilityRegistry } = await import('./registry.js');
        const allUtilities = UtilityRegistry.getAllUtilities();
        const totalUtilities = allUtilities.length;
        let utilities = allUtilities;

        // Apply filters
        if (this.state.selectedCategory !== 'all') {
            utilities = utilities.filter(u => u.category === this.state.selectedCategory);
        }

        if (this.state.searchQuery) {
            const query = this.state.searchQuery.toLowerCase();
            utilities = utilities.filter(u =>
                u.name.toLowerCase().includes(query) ||
                u.description.toLowerCase().includes(query) ||
                u.category.toLowerCase().includes(query)
            );
        }

        // Get categories with counts
        const categories = UtilityRegistry.getCategories();
        const categoryCounts = {};
        categories.forEach(cat => {
            categoryCounts[cat] = allUtilities
                .filter(u => u.category === cat).length;
        });

        container.innerHTML = `
            <div class="search-container">
                <input
                    type="search"
                    class="search-input"
                    placeholder="Search ${totalUtilities} tools... (Ctrl+K)"
                    value="${this.state.searchQuery}"
                    id="search-input"
                />
            </div>

            <div class="category-nav">
                <button class="category-chip ${this.state.selectedCategory === 'all' ? 'active' : ''}"
                    data-category="all">
                    All (${totalUtilities})
                </button>
                ${categories.map(cat => `
                    <button class="category-chip ${this.state.selectedCategory === cat ? 'active' : ''}"
                        data-category="${cat}">
                        ${cat} (${categoryCounts[cat]})
                    </button>
                `).join('')}
            </div>

            ${this.state.recentlyUsed.length > 0 && this.state.selectedCategory === 'all' && !this.state.searchQuery ? `
                <div class="recently-used">
                    <h3>Recently Used</h3>
                    <div class="utility-grid">
                        ${this.state.recentlyUsed.slice(0, 4).map(id => {
                            const utility = this.getUtilityById(UtilityRegistry, id);
                            if (!utility) return '';
                            return this.renderUtilityCard(utility);
                        }).join('')}
                    </div>
                </div>
            ` : ''}

            ${this.state.favorites.length > 0 && this.state.selectedCategory === 'all' && !this.state.searchQuery ? `
                <div class="favorites">
                    <h3>Favorites</h3>
                    <div class="utility-grid">
                        ${this.state.favorites.map(id => {
                            const utility = this.getUtilityById(UtilityRegistry, id);
                            if (!utility) return '';
                            return this.renderUtilityCard(utility);
                        }).join('')}
                    </div>
                </div>
            ` : ''}

            <div class="all-utilities">
                <h3>${this.state.searchQuery ? `Search Results (${utilities.length})` :
                     this.state.selectedCategory === 'all' ? 'All Utilities' : this.state.selectedCategory}</h3>
                <div class="utility-grid">
                    ${utilities.slice(0, 50).map(utility =>
                        this.renderUtilityCard(utility)
                    ).join('')}
                </div>
            </div>

            ${utilities.length > 50 ? `
                <div style="text-align: center; margin: 40px 0;">
                    <p>Showing 50 of ${utilities.length} tools</p>
                    <button class="btn btn-primary" id="show-all-btn">
                        Show All
                    </button>
                </div>
            ` : ''}

            ${utilities.length === 0 ? `
                <div style="text-align: center; margin: 40px 0;">
                    <p>No utilities found matching your search.</p>
                </div>
            ` : ''}
        `;

        // Setup search handler
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.state.searchQuery = e.target.value;
                this.renderHome(container);
            });
        }

        // Setup show all handler
        const showAllBtn = document.getElementById('show-all-btn');
        if (showAllBtn) {
            showAllBtn.addEventListener('click', () => {
                const allUtilities = document.querySelector('.all-utilities .utility-grid');
                allUtilities.innerHTML = utilities.map(utility =>
                    this.renderUtilityCard(utility)
                ).join('');
                showAllBtn.style.display = 'none';
            });
        }
    },

    renderUtilityCard(utility) {
        const isFavorite = this.state.favorites.includes(utility.id);
        const icon = utility.icon || '🛠️';

        return `
            <div class="card utility-card" data-utility="${utility.id}">
                <button class="favorite-btn utility-badge ${isFavorite ? 'active' : ''}"
                    data-favorite="${utility.id}"
                    onclick="event.stopPropagation()">
                    ${isFavorite ? '★' : '☆'}
                </button>
                <div class="utility-icon">${icon}</div>
                <h3 class="utility-title">${utility.name}</h3>
                <p class="utility-description">${utility.description}</p>
                <div class="utility-tags">
                    <span class="badge">${utility.category}</span>
                    ${utility.complexity ? `<span class="badge">${utility.complexity}</span>` : ''}
                </div>
            </div>
        `;
    },

    async renderUtility(container, utilityId) {
        const { UtilityRegistry } = await import('./registry.js');
        const utility = this.getUtilityById(UtilityRegistry, utilityId);

        if (!utility) {
            container.innerHTML = `
                <div class="error-message">
                    <h2>Utility not found</h2>
                    <button class="btn btn-primary" onclick="App.navigate('home')">Go Home</button>
                </div>
            `;
            return;
        }

        // Track as recently used
        this.addToRecentlyUsed(utilityId);

        // Load utility module if not already loaded
        if (!this.state.loadedUtilities.has(utilityId)) {
            try {
                const categoryPath = utility.category.toLowerCase().replace(/\s+/g, '-');
                const module = await import(`../utilities/${categoryPath}/${utilityId}.js`);
                const loadedUtility =
                    module.default ||
                    Object.values(module).find(value => value && typeof value === 'object');

                if (!loadedUtility) {
                    throw new Error('Utility module did not export a usable object');
                }

                this.state.loadedUtilities.set(utilityId, loadedUtility);
            } catch (error) {
                console.error(`Error loading utility ${utilityId}:`, error);
                container.innerHTML = `
                    <div class="error-message">
                        <h2>Error loading utility</h2>
                        <p>${error.message}</p>
                        <button class="btn btn-primary" onclick="App.navigate('home')">Go Home</button>
                    </div>
                `;
                return;
            }
        }

        const utilityModule = this.state.loadedUtilities.get(utilityId);

        // Initialize utility state if needed
        if (!this.state.currentUtility || this.state.currentUtility.id !== utilityId) {
            const savedState = this.loadUtilityState(utilityId) || {};
            const initialState = typeof utilityModule.init === 'function' ? utilityModule.init() : {};

            this.state.currentUtility = {
                id: utilityId,
                state: { ...initialState, ...savedState }
            };
        }

        container.innerHTML = `
            <div class="utility-page">
                <div class="utility-header">
                    <button class="btn btn-ghost" onclick="history.back()">← Back</button>
                    <h1>${utility.name}</h1>
                    <p>${utility.description}</p>
                </div>

                <div id="utility-content"></div>

                <div class="utility-help">
                    <h3>How to use</h3>
                    ${this.getUtilityHelpHtml(utilityModule, utility)}
                </div>
            </div>
        `;

        // Render utility
        const contentContainer = document.getElementById('utility-content');
        const setState = (newState = {}, options = {}) => {
            if (!this.state.currentUtility || this.state.currentUtility.id !== utilityId) {
                return;
            }

            this.state.currentUtility.state = {
                ...this.state.currentUtility.state,
                ...newState
            };
            this.saveUtilityState(utilityId, this.state.currentUtility.state);

            const shouldRerender = options.rerender ?? this.shouldRerenderOnStateChange(newState);
            if (shouldRerender) {
                this.renderUtilityContent(
                    contentContainer,
                    utilityModule,
                    utility,
                    this.state.currentUtility.state,
                    setState
                );
            }
        };

        this.renderUtilityContent(
            contentContainer,
            utilityModule,
            utility,
            this.state.currentUtility.state,
            setState
        );
    },

    async renderCategory(container, category) {
        this.state.selectedCategory = category ? decodeURIComponent(category) : 'all';
        await this.renderHome(container);
    },

    renderAbout(container) {
        container.innerHTML = `
            <div style="max-width: 800px; margin: 40px auto;">
                <h1>About 501 Tools</h1>

                <div class="card" style="margin: 20px 0;">
                    <h2>Philosophy</h2>
                    <p>501 Tools is a collection of delightful utilities that solve micro-frictions in daily life.
                    Each tool addresses a specific need you might not have known you had, but once discovered,
                    becomes indispensable.</p>
                </div>

                <div class="card" style="margin: 20px 0;">
                    <h2>Privacy First</h2>
                    <p>Everything runs entirely in your browser. No servers. No tracking. No external calls.
                    Your data never leaves your device unless you explicitly export it to a file.</p>
                </div>

                <div class="card" style="margin: 20px 0;">
                    <h2>Works Offline</h2>
                    <p>Once loaded, all 501 tools work completely offline. Perfect for airplane mode,
                    remote locations, or simply when you want to disconnect.</p>
                </div>

                <div class="card" style="margin: 20px 0;">
                    <h2>Accessibility</h2>
                    <p>Every tool is designed with accessibility in mind. Keyboard navigation, screen reader
                    support, high contrast modes, and reduced motion options ensure everyone can use these utilities.</p>
                </div>

                <div class="card" style="margin: 20px 0;">
                    <h2>Open Philosophy</h2>
                    <p>Built with standard web technologies. No frameworks, no dependencies, just clean,
                    maintainable code that will work for years to come.</p>
                </div>
            </div>
        `;
    },

    renderSettings(container) {
        container.innerHTML = `
            <div style="max-width: 600px; margin: 40px auto;">
                <h1>Settings</h1>

                <div class="card" style="margin: 20px 0;">
                    <h3>Theme</h3>
                    <div style="margin: 10px 0;">
                        <button class="btn btn-primary" onclick="App.toggleTheme()">
                            Current: ${this.state.theme}
                        </button>
                        <p style="margin-top: 10px; font-size: 0.875rem; color: var(--color-neutral-600);">
                            Choose between light, dark, and high contrast themes
                        </p>
                    </div>
                </div>

                <div class="card" style="margin: 20px 0;">
                    <h3>Text Size</h3>
                    <div class="slider-container">
                        <span>Small</span>
                        <input type="range" class="slider" min="14" max="20" value="16"
                            id="text-size-slider">
                        <span>Large</span>
                    </div>
                </div>

                <div class="card" style="margin: 20px 0;">
                    <h3>Reduced Motion</h3>
                    <label class="checkbox-label">
                        <input type="checkbox" id="reduced-motion">
                        Reduce animations and transitions
                    </label>
                </div>

                <div class="card" style="margin: 20px 0;">
                    <h3>Auto-save</h3>
                    <label class="checkbox-label">
                        <input type="checkbox" id="auto-save" checked>
                        Automatically save utility data
                    </label>
                </div>

                <div class="card" style="margin: 20px 0;">
                    <h3>Notifications</h3>
                    <label class="checkbox-label">
                        <input type="checkbox" id="notifications">
                        Show helpful notifications
                    </label>
                </div>
            </div>
        `;

        // Setup settings handlers
        const textSizeSlider = document.getElementById('text-size-slider');
        if (textSizeSlider) {
            textSizeSlider.addEventListener('input', (e) => {
                document.documentElement.style.fontSize = e.target.value + 'px';
                this.state.settings.textSize = e.target.value;
                this.saveSettings();
            });
        }

        const reducedMotion = document.getElementById('reduced-motion');
        if (reducedMotion) {
            reducedMotion.checked = this.state.settings.reducedMotion || false;
            reducedMotion.addEventListener('change', (e) => {
                this.toggleReducedMotion(e.target.checked);
                this.state.settings.reducedMotion = e.target.checked;
                this.saveSettings();
            });
        }

        const autoSave = document.getElementById('auto-save');
        if (autoSave) {
            autoSave.checked = this.state.settings.autoSave !== false;
            autoSave.addEventListener('change', (e) => {
                this.state.settings.autoSave = e.target.checked;
                this.saveSettings();
            });
        }
    },

    renderData(container) {
        const dataSize = this.calculateDataSize();

        container.innerHTML = `
            <div style="max-width: 600px; margin: 40px auto;">
                <h1>Data Management</h1>

                <div class="card" style="margin: 20px 0;">
                    <h3>Storage Usage</h3>
                    <p>Currently using approximately ${dataSize} of browser storage</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 30%;"></div>
                    </div>
                </div>

                <div class="card" style="margin: 20px 0;">
                    <h3>Export Data</h3>
                    <p>Download all your data as a JSON file</p>
                    <button class="btn btn-primary" onclick="App.exportData()">
                        Export All Data
                    </button>
                </div>

                <div class="card" style="margin: 20px 0;">
                    <h3>Import Data</h3>
                    <p>Restore data from a previously exported file</p>
                    <input type="file" accept=".json" id="import-file">
                </div>

                <div class="card" style="margin: 20px 0; border: 2px solid var(--color-danger);">
                    <h3 style="color: var(--color-danger);">Danger Zone</h3>
                    <p>Permanently delete all data stored by this application</p>
                    <button class="btn btn-danger" onclick="App.confirmEraseData()">
                        Erase All Data
                    </button>
                </div>
            </div>
        `;

        // Setup import handler
        const importFile = document.getElementById('import-file');
        if (importFile) {
            importFile.addEventListener('change', (e) => {
                if (e.target.files[0]) {
                    this.importData(e.target.files[0]);
                }
            });
        }
    },

    renderSystem(container) {
        const capabilities = this.detectCapabilities();

        container.innerHTML = `
            <div style="max-width: 800px; margin: 40px auto;">
                <h1>System Check</h1>

                <div class="card" style="margin: 20px 0;">
                    <h3>Browser Capabilities</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        ${Object.entries(capabilities).map(([key, value]) => `
                            <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                                <td style="padding: 8px;">${key}</td>
                                <td style="padding: 8px; text-align: right;">
                                    <span class="badge ${value ? 'badge-success' : ''}">
                                        ${value ? '✓ Available' : '✗ Not Available'}
                                    </span>
                                </td>
                            </tr>
                        `).join('')}
                    </table>
                </div>

                <div class="card" style="margin: 20px 0;">
                    <h3>Performance</h3>
                    ${window.performance && window.performance.timing ? `
                        <p>Page load time: ${performance.timing.loadEventEnd - performance.timing.navigationStart}ms</p>
                    ` : '<p>Performance data not available</p>'}
                    ${window.performance && window.performance.memory ? `
                        <p>Memory usage: ${Math.round(performance.memory.usedJSHeapSize / 1024 / 1024)}MB</p>
                    ` : ''}
                </div>

                <div class="card" style="margin: 20px 0;">
                    <h3>Browser Information</h3>
                    <p style="word-break: break-all;">User Agent: ${navigator.userAgent}</p>
                    <p>Language: ${navigator.language}</p>
                    <p>Online: ${navigator.onLine ? 'Yes' : 'No'}</p>
                    <p>Screen: ${screen.width} x ${screen.height}</p>
                </div>
            </div>
        `;
    },

    // Helper Methods
    getUtilityById(registry, utilityId) {
        if (registry && typeof registry.getUtility === 'function') {
            return registry.getUtility(utilityId);
        }

        if (registry && typeof registry.getById === 'function') {
            return registry.getById(utilityId);
        }

        if (registry && typeof registry.getAllUtilities === 'function') {
            return registry.getAllUtilities().find(util => util.id === utilityId);
        }

        return null;
    },

    renderUtilityContent(container, utilityModule, utility, state, setState) {
        if (!container) {
            return;
        }

        try {
            if (typeof utilityModule.render === 'function') {
                utilityModule.render(container, state, setState);
                return;
            }

            this.renderGenericUtility(container, utilityModule, utility, state, setState);
        } catch (error) {
            console.error(`Render failed for ${utility.id}:`, error);
            container.innerHTML = `
                <div class="error-message">
                    <h2>Error rendering utility</h2>
                    <p>${this.escapeHtml(error.message || 'Unknown render error')}</p>
                </div>
            `;
        }
    },

    renderGenericUtility(container, utilityModule, utility, state, setState) {
        const callableMethods = this.getCallableMethods(utilityModule);

        if (callableMethods.length === 0) {
            container.innerHTML = `
                <div class="card">
                    <h3>No runnable interface available</h3>
                    <p>This utility module loaded, but it does not expose a render or callable method.</p>
                </div>
            `;
            return;
        }

        const defaultMethod = this.getDefaultCallableMethod(callableMethods);
        const selectedMethod = callableMethods.includes(state.selectedMethod)
            ? state.selectedMethod
            : defaultMethod;
        const rawInput = typeof state.rawInput === 'string' ? state.rawInput : '{}';
        const hasResult = Object.prototype.hasOwnProperty.call(state, 'executionResult');

        container.innerHTML = `
            <div class="utility-workspace">
                <div class="card" style="margin-bottom: 20px;">
                    <h3>Run Utility</h3>
                    <div class="form-group" style="margin-bottom: 12px;">
                        <label for="generic-method">Method</label>
                        <select class="input" id="generic-method">
                            ${callableMethods.map(method => `
                                <option value="${method}" ${method === selectedMethod ? 'selected' : ''}>
                                    ${method}
                                </option>
                            `).join('')}
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="generic-input">Input JSON</label>
                        <textarea
                            class="textarea"
                            id="generic-input"
                            placeholder='Use object: {"key":"value"} or array for positional args: [arg1,arg2]'
                            style="min-height: 120px;"
                        >${this.escapeHtml(rawInput)}</textarea>
                    </div>

                    <button class="btn btn-primary" id="generic-run-btn">Run</button>
                </div>

                ${(state.executionError || hasResult) ? `
                    <div class="card">
                        <h3>Output</h3>
                        ${state.executionError
                            ? `<p style="color: var(--color-danger);">${this.escapeHtml(state.executionError)}</p>`
                            : `<pre style="white-space: pre-wrap; word-break: break-word; margin: 0;">${this.escapeHtml(this.formatUtilityResult(state.executionResult))}</pre>`
                        }
                    </div>
                ` : ''}
            </div>
        `;

        const methodSelect = container.querySelector('#generic-method');
        const inputField = container.querySelector('#generic-input');
        const runButton = container.querySelector('#generic-run-btn');

        if (methodSelect) {
            methodSelect.addEventListener('change', (e) => {
                setState(
                    {
                        selectedMethod: e.target.value,
                        executionError: null
                    },
                    { rerender: true }
                );
            });
        }

        if (inputField) {
            inputField.addEventListener('input', (e) => {
                setState({ rawInput: e.target.value }, { rerender: false });
            });
        }

        if (runButton) {
            runButton.addEventListener('click', async () => {
                const methodName = methodSelect ? methodSelect.value : selectedMethod;
                const method = utilityModule[methodName];

                if (typeof method !== 'function') {
                    setState(
                        { executionError: `Method "${methodName}" is not callable` },
                        { rerender: true }
                    );
                    return;
                }

                try {
                    const parsedInput = this.parseUtilityInput(inputField ? inputField.value : rawInput);
                    const args = Array.isArray(parsedInput) ? parsedInput : [parsedInput];
                    const executionResult = await method.apply(utilityModule, args);

                    setState(
                        {
                            selectedMethod: methodName,
                            executionResult,
                            executionError: null
                        },
                        { rerender: true }
                    );
                } catch (error) {
                    setState(
                        {
                            selectedMethod: methodName,
                            executionError: error.message || 'Failed to run utility'
                        },
                        { rerender: true }
                    );
                }
            });
        }
    },

    getCallableMethods(utilityModule) {
        const nonCallableKeys = new Set([
            'id',
            'name',
            'description',
            'category',
            'icon',
            'complexity',
            'render',
            'help',
            'init',
            'setupEventListeners',
            'process'
        ]);

        return Object.keys(utilityModule).filter(key => {
            return typeof utilityModule[key] === 'function' && !nonCallableKeys.has(key);
        });
    },

    getDefaultCallableMethod(methodNames) {
        const preferredMethods = ['execute', 'create', 'createForecast', 'provideAdvice', 'run', 'calculate'];

        for (const preferred of preferredMethods) {
            if (methodNames.includes(preferred)) {
                return preferred;
            }
        }

        return methodNames[0];
    },

    parseUtilityInput(inputText) {
        const trimmed = inputText.trim();
        if (!trimmed) {
            return {};
        }

        try {
            return JSON.parse(trimmed);
        } catch (error) {
            throw new Error(`Input must be valid JSON: ${error.message}`);
        }
    },

    formatUtilityResult(result) {
        if (result === undefined) {
            return 'No result returned';
        }

        if (typeof result === 'string') {
            return result;
        }

        try {
            return JSON.stringify(result, null, 2);
        } catch {
            return String(result);
        }
    },

    getUtilityHelpHtml(utilityModule, utility) {
        try {
            if (typeof utilityModule.help === 'function') {
                return utilityModule.help();
            }

            if (typeof utilityModule.getHelp === 'function') {
                const help = utilityModule.getHelp();

                if (typeof help === 'string') {
                    return help;
                }

                if (help && typeof help === 'object') {
                    const examples = Array.isArray(help.examples) ? help.examples : [];
                    const usage = help.usage ? `<li>Usage: ${this.escapeHtml(help.usage)}</li>` : '';

                    return `
                        <ul>
                            ${usage}
                            <li>Method-based utility runner is available in this page</li>
                            ${examples.slice(0, 3).map(example =>
                                `<li>${this.escapeHtml(example)}</li>`
                            ).join('')}
                        </ul>
                    `;
                }
            }
        } catch (error) {
            console.error(`Help rendering failed for ${utility.id}:`, error);
        }

        return `
            <ul>
                <li>This utility helps you ${this.escapeHtml(utility.description.toLowerCase())}</li>
                <li>All processing happens in your browser</li>
                <li>Your data stays on your device</li>
            </ul>
        `;
    },

    shouldRerenderOnStateChange(newState) {
        const keys = Object.keys(newState || {});
        if (keys.length === 0) {
            return false;
        }

        if (Object.values(newState).some(value => value !== null && typeof value === 'object')) {
            return true;
        }

        return keys.some(key =>
            /(result|output|history|error|analysis|forecast|plan|report|recommend|summary|score|status|generated|processed|calculated|insight|data)/i.test(key)
        );
    },

    escapeHtml(value) {
        return String(value)
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;');
    },

    toggleFavorite(utilityId) {
        const index = this.state.favorites.indexOf(utilityId);
        if (index > -1) {
            this.state.favorites.splice(index, 1);
        } else {
            this.state.favorites.push(utilityId);
        }
        localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
        this.renderHome(document.getElementById('app'));
        this.showToast(index > -1 ? 'Removed from favorites' : 'Added to favorites');
    },

    addToRecentlyUsed(utilityId) {
        this.state.recentlyUsed = [
            utilityId,
            ...this.state.recentlyUsed.filter(id => id !== utilityId)
        ].slice(0, 10);
        localStorage.setItem('recentlyUsed', JSON.stringify(this.state.recentlyUsed));
    },

    saveUtilityState(utilityId, state) {
        if (this.state.settings.autoSave !== false) {
            localStorage.setItem(`utility_${utilityId}`, JSON.stringify(state));
        }
    },

    loadUtilityState(utilityId) {
        const saved = localStorage.getItem(`utility_${utilityId}`);
        if (!saved) {
            return null;
        }

        try {
            return JSON.parse(saved);
        } catch {
            localStorage.removeItem(`utility_${utilityId}`);
            return null;
        }
    },

    saveSettings() {
        localStorage.setItem('settings', JSON.stringify(this.state.settings));
    },

    showToast(message, duration = 3000) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    },

    showModal(content) {
        const modal = document.getElementById('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <button class="btn btn-ghost" style="float: right;" onclick="App.closeModal()">×</button>
                ${content}
            </div>
        `;
        modal.classList.add('active');
    },

    closeModal() {
        const modal = document.getElementById('modal');
        modal.classList.remove('active');
    },

    calculateDataSize() {
        const data = JSON.stringify(localStorage);
        const bytes = new Blob([data]).size;

        if (bytes < 1024) return bytes + ' bytes';
        if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + ' KB';
        return Math.round(bytes / 1024 / 1024) + ' MB';
    },

    exportData() {
        const data = {
            version: '1.0',
            timestamp: new Date().toISOString(),
            favorites: this.state.favorites,
            recentlyUsed: this.state.recentlyUsed,
            settings: this.state.settings,
            theme: this.state.theme,
            utilityData: {}
        };

        // Collect all utility data
        for (const key of Object.keys(localStorage)) {
            if (key.startsWith('utility_')) {
                data.utilityData[key] = localStorage.getItem(key);
            }
        }

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `501tools_export_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);

        this.showToast('Data exported successfully!');
    },

    importData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);

                // Restore settings
                this.state.favorites = data.favorites || [];
                this.state.recentlyUsed = data.recentlyUsed || [];
                this.state.settings = data.settings || {};
                this.state.theme = data.theme || 'light';

                // Save to localStorage
                localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
                localStorage.setItem('recentlyUsed', JSON.stringify(this.state.recentlyUsed));
                localStorage.setItem('settings', JSON.stringify(this.state.settings));
                localStorage.setItem('theme', this.state.theme);

                // Restore utility data
                if (data.utilityData) {
                    for (const [key, value] of Object.entries(data.utilityData)) {
                        localStorage.setItem(key, value);
                    }
                }

                this.setupTheme();
                this.showToast('Data imported successfully!');
                this.renderData(document.getElementById('app'));
            } catch (error) {
                this.showToast('Error importing data: ' + error.message);
            }
        };
        reader.readAsText(file);
    },

    confirmEraseData() {
        this.showModal(`
            <h2>Confirm Data Erasure</h2>
            <p>This will permanently delete all your data including:</p>
            <ul>
                <li>All saved utility data</li>
                <li>Favorites and recently used</li>
                <li>Settings and preferences</li>
            </ul>
            <p><strong>This action cannot be undone!</strong></p>
            <div style="margin-top: 20px;">
                <button class="btn btn-danger" onclick="App.eraseAllData()">
                    Yes, Erase Everything
                </button>
                <button class="btn btn-secondary" onclick="App.closeModal()">
                    Cancel
                </button>
            </div>
        `);
    },

    eraseAllData() {
        // Clear all storage
        localStorage.clear();
        sessionStorage.clear();

        // Clear IndexedDB if present
        if (window.indexedDB) {
            indexedDB.databases().then(databases => {
                databases.forEach(db => indexedDB.deleteDatabase(db.name));
            }).catch(console.error);
        }

        // Reset state
        this.state = {
            currentRoute: 'home',
            currentUtility: null,
            theme: 'light',
            favorites: [],
            recentlyUsed: [],
            settings: {},
            searchQuery: '',
            selectedCategory: 'all',
            loadedUtilities: new Map()
        };

        this.setupTheme();
        this.closeModal();
        this.showToast('All data has been erased');
        this.navigate('home');
    },

    detectCapabilities() {
        return {
            'LocalStorage': typeof localStorage !== 'undefined',
            'SessionStorage': typeof sessionStorage !== 'undefined',
            'IndexedDB': 'indexedDB' in window,
            'WebGL': (() => {
                try {
                    const canvas = document.createElement('canvas');
                    return !!(window.WebGLRenderingContext &&
                        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
                } catch(e) {
                    return false;
                }
            })(),
            'Web Audio': 'AudioContext' in window || 'webkitAudioContext' in window,
            'Canvas 2D': (() => {
                const canvas = document.createElement('canvas');
                return !!(canvas.getContext && canvas.getContext('2d'));
            })(),
            'Vibration': 'vibrate' in navigator,
            'Notifications': 'Notification' in window,
            'Geolocation': 'geolocation' in navigator,
            'Device Motion': 'DeviceMotionEvent' in window,
            'Touch Events': 'ontouchstart' in window,
            'Service Worker': 'serviceWorker' in navigator,
            'WebRTC': 'RTCPeerConnection' in window,
            'File API': 'File' in window && 'FileReader' in window,
            'Clipboard API': 'clipboard' in navigator
        };
    },

    checkCapabilities() {
        const capabilities = this.detectCapabilities();
        const required = ['LocalStorage', 'Canvas 2D'];
        const missing = required.filter(cap => !capabilities[cap]);

        if (missing.length > 0) {
            this.showToast(`Warning: Your browser lacks ${missing.join(', ')}. Some features may not work.`, 5000);
        }
    },

    toggleReducedMotion(enabled) {
        if (enabled) {
            document.documentElement.style.setProperty('--transition-fast', '0.01ms');
            document.documentElement.style.setProperty('--transition-base', '0.01ms');
            document.documentElement.style.setProperty('--transition-slow', '0.01ms');
        } else {
            document.documentElement.style.setProperty('--transition-fast', '150ms');
            document.documentElement.style.setProperty('--transition-base', '250ms');
            document.documentElement.style.setProperty('--transition-slow', '350ms');
        }
    }
};
