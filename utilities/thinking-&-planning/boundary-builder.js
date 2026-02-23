// Boundary Builder - Design and practice personal boundaries
export default {
    init() {
        return {
            boundaries: JSON.parse(localStorage.getItem('boundaries') || '[]'),
            currentBoundary: {
                category: 'personal',
                statement: '',
                response: '',
                notes: ''
            },
            practiceMode: false,
            currentScenario: null
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Boundary Builder</h2>
                <p>Design clear personal boundaries and practice enforcing them with confidence</p>

                ${!state.practiceMode ? `
                    <div class="card" style="margin: 20px 0;">
                        <h3>Create a New Boundary</h3>

                        <div class="form-group">
                            <label class="label">Category:</label>
                            <select class="input" id="category-select" value="${state.currentBoundary.category}">
                                <option value="personal">Personal Space</option>
                                <option value="time">Time & Energy</option>
                                <option value="emotional">Emotional</option>
                                <option value="work">Work/Professional</option>
                                <option value="family">Family</option>
                                <option value="social">Social</option>
                                <option value="digital">Digital/Online</option>
                                <option value="financial">Financial</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="label">Boundary Statement:</label>
                            <input
                                type="text"
                                class="input"
                                id="statement-input"
                                placeholder="e.g., 'I need alone time after work to recharge'"
                                value="${state.currentBoundary.statement}"
                            />
                        </div>

                        <div class="form-group">
                            <label class="label">Response When Crossed:</label>
                            <textarea
                                class="textarea"
                                id="response-input"
                                placeholder="What you'll say when someone crosses this boundary..."
                            >${state.currentBoundary.response}</textarea>
                        </div>

                        <div class="form-group">
                            <label class="label">Notes (optional):</label>
                            <input
                                type="text"
                                class="input"
                                id="notes-input"
                                placeholder="Any additional context or reminders..."
                                value="${state.currentBoundary.notes}"
                            />
                        </div>

                        <button class="btn btn-primary" id="save-boundary-btn">
                            Save Boundary
                        </button>
                    </div>

                    <div class="card">
                        <h3>Your Boundaries</h3>
                        ${state.boundaries.length === 0 ? `
                            <p style="color: var(--color-neutral-500);">No boundaries created yet. Start by adding your first boundary above.</p>
                        ` : `
                            <div class="tabs" style="margin-bottom: 20px;">
                                ${['all', 'personal', 'time', 'emotional', 'work', 'family', 'social', 'digital', 'financial'].map(cat => `
                                    <button class="tab ${cat === 'all' ? 'active' : ''}" data-filter="${cat}">
                                        ${cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                                    </button>
                                `).join('')}
                            </div>
                            <div id="boundaries-list">
                                ${this.renderBoundariesList(state.boundaries, 'all')}
                            </div>
                        `}
                    </div>

                    <div class="card" style="margin-top: 20px;">
                        <h3>Practice Mode</h3>
                        <p>Practice responding to boundary violations in a safe space</p>
                        <button class="btn btn-secondary" id="practice-btn">
                            Start Practice Session
                        </button>
                    </div>
                ` : this.renderPracticeMode(state)}
            </div>
        `;

        this.setupEventListeners(container, state, setState);
    },

    renderBoundariesList(boundaries, filter) {
        const filtered = filter === 'all' ? boundaries : boundaries.filter(b => b.category === filter);

        if (filtered.length === 0) {
            return '<p style="color: var(--color-neutral-500);">No boundaries in this category.</p>';
        }

        return `
            <div style="display: flex; flex-direction: column; gap: 15px;">
                ${filtered.map((boundary, i) => `
                    <div class="card" style="border-left: 4px solid ${this.getCategoryColor(boundary.category)};">
                        <div style="display: flex; justify-content: space-between; align-items: start;">
                            <div style="flex: 1;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                                    <span class="badge" style="background: ${this.getCategoryColor(boundary.category)}; color: white;">
                                        ${boundary.category}
                                    </span>
                                </div>
                                <p style="font-weight: 600; margin-bottom: 10px;">
                                    "${boundary.statement}"
                                </p>
                                <p style="color: var(--color-neutral-600); margin-bottom: 10px;">
                                    <strong>Response:</strong> ${boundary.response}
                                </p>
                                ${boundary.notes ? `
                                    <p style="font-size: 0.875rem; color: var(--color-neutral-500);">
                                        Note: ${boundary.notes}
                                    </p>
                                ` : ''}
                            </div>
                            <button class="btn btn-ghost" data-delete="${i}">×</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderPracticeMode(state) {
        const scenario = state.currentScenario || this.generateScenario(state.boundaries);

        return `
            <div class="card">
                <h3>Boundary Practice Session</h3>
                <button class="btn btn-ghost" id="exit-practice-btn" style="float: right;">
                    Exit Practice
                </button>

                ${scenario ? `
                    <div style="margin: 20px 0;">
                        <div class="card" style="background: var(--color-neutral-100); margin-bottom: 20px;">
                            <h4>Scenario:</h4>
                            <p style="font-size: 1.125rem;">${scenario.situation}</p>
                        </div>

                        <div class="card" style="border: 2px solid var(--color-primary);">
                            <h4>Your Boundary:</h4>
                            <p style="font-weight: 600;">"${scenario.boundary.statement}"</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <h4>How would you respond?</h4>
                            <textarea
                                class="textarea"
                                id="practice-response"
                                placeholder="Type your response here..."
                                style="min-height: 100px;"
                            ></textarea>

                            <div class="utility-controls" style="margin-top: 15px;">
                                <button class="btn btn-primary" id="check-response-btn">
                                    Check Response
                                </button>
                                <button class="btn btn-secondary" id="next-scenario-btn">
                                    Next Scenario
                                </button>
                            </div>
                        </div>

                        <div id="feedback-area"></div>
                    </div>
                ` : `
                    <p>No boundaries to practice. Create some boundaries first!</p>
                `}
            </div>
        `;
    },

    setupEventListeners(container, state, setState) {
        // Category select
        const categorySelect = container.querySelector('#category-select');
        if (categorySelect) {
            categorySelect.addEventListener('change', (e) => {
                setState({
                    currentBoundary: { ...state.currentBoundary, category: e.target.value }
                });
            });
        }

        // Input fields
        const statementInput = container.querySelector('#statement-input');
        const responseInput = container.querySelector('#response-input');
        const notesInput = container.querySelector('#notes-input');

        if (statementInput) {
            statementInput.addEventListener('input', (e) => {
                setState({
                    currentBoundary: { ...state.currentBoundary, statement: e.target.value }
                });
            });
        }

        if (responseInput) {
            responseInput.addEventListener('input', (e) => {
                setState({
                    currentBoundary: { ...state.currentBoundary, response: e.target.value }
                });
            });
        }

        if (notesInput) {
            notesInput.addEventListener('input', (e) => {
                setState({
                    currentBoundary: { ...state.currentBoundary, notes: e.target.value }
                });
            });
        }

        // Save boundary
        const saveBtn = container.querySelector('#save-boundary-btn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                if (state.currentBoundary.statement && state.currentBoundary.response) {
                    const newBoundaries = [...state.boundaries, { ...state.currentBoundary }];
                    localStorage.setItem('boundaries', JSON.stringify(newBoundaries));
                    setState({
                        boundaries: newBoundaries,
                        currentBoundary: {
                            category: 'personal',
                            statement: '',
                            response: '',
                            notes: ''
                        }
                    });
                } else {
                    alert('Please fill in both the boundary statement and response.');
                }
            });
        }

        // Delete boundary
        container.querySelectorAll('[data-delete]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.delete);
                const newBoundaries = state.boundaries.filter((_, i) => i !== index);
                localStorage.setItem('boundaries', JSON.stringify(newBoundaries));
                setState({ boundaries: newBoundaries });
            });
        });

        // Filter tabs
        container.querySelectorAll('.tab[data-filter]').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                container.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');

                const listContainer = container.querySelector('#boundaries-list');
                if (listContainer) {
                    listContainer.innerHTML = this.renderBoundariesList(state.boundaries, filter);
                }
            });
        });

        // Practice mode
        const practiceBtn = container.querySelector('#practice-btn');
        if (practiceBtn) {
            practiceBtn.addEventListener('click', () => {
                setState({
                    practiceMode: true,
                    currentScenario: this.generateScenario(state.boundaries)
                });
            });
        }

        const exitPracticeBtn = container.querySelector('#exit-practice-btn');
        if (exitPracticeBtn) {
            exitPracticeBtn.addEventListener('click', () => {
                setState({ practiceMode: false, currentScenario: null });
            });
        }

        const checkResponseBtn = container.querySelector('#check-response-btn');
        if (checkResponseBtn) {
            checkResponseBtn.addEventListener('click', () => {
                const response = container.querySelector('#practice-response').value;
                const feedbackArea = container.querySelector('#feedback-area');

                if (feedbackArea && response) {
                    feedbackArea.innerHTML = `
                        <div class="card" style="background: var(--color-success); color: white; margin-top: 20px;">
                            <h4>Great practice!</h4>
                            <p>Your prepared response: "${state.currentScenario.boundary.response}"</p>
                            <p style="margin-top: 10px;">Remember: The key is to be calm, clear, and consistent.</p>
                        </div>
                    `;
                }
            });
        }

        const nextScenarioBtn = container.querySelector('#next-scenario-btn');
        if (nextScenarioBtn) {
            nextScenarioBtn.addEventListener('click', () => {
                setState({ currentScenario: this.generateScenario(state.boundaries) });
            });
        }
    },

    generateScenario(boundaries) {
        if (boundaries.length === 0) return null;

        const scenarios = {
            personal: [
                "A friend drops by unannounced and wants to hang out when you need alone time.",
                "Someone keeps hugging you when you've expressed you don't like physical contact.",
                "A colleague sits too close to you during meetings."
            ],
            time: [
                "Your boss asks you to work late again this week.",
                "A friend expects you to always be available to talk.",
                "Family members assume you'll attend every gathering."
            ],
            emotional: [
                "Someone keeps bringing up topics that upset you.",
                "A friend constantly dumps their problems on you.",
                "Someone dismisses your feelings as 'too sensitive'."
            ],
            work: [
                "You're asked to take on tasks outside your job description.",
                "Colleagues expect immediate responses to non-urgent emails.",
                "Your manager texts you during weekends."
            ],
            family: [
                "Relatives comment on your life choices.",
                "Parents try to control your decisions.",
                "Siblings expect you to mediate their conflicts."
            ],
            social: [
                "Friends pressure you to drink or stay out late.",
                "Someone shares your personal information without asking.",
                "People expect you to attend events you're not comfortable with."
            ],
            digital: [
                "Someone tags you in posts without permission.",
                "People expect immediate responses to messages.",
                "Someone screenshots your private conversations."
            ],
            financial: [
                "Friends assume you'll always pay for group activities.",
                "Family members ask to borrow money frequently.",
                "Someone questions your spending choices."
            ]
        };

        const boundary = boundaries[Math.floor(Math.random() * boundaries.length)];
        const categoryScenarios = scenarios[boundary.category] || scenarios.personal;
        const situation = categoryScenarios[Math.floor(Math.random() * categoryScenarios.length)];

        return { boundary, situation };
    },

    getCategoryColor(category) {
        const colors = {
            personal: '#8b5cf6',
            time: '#3b82f6',
            emotional: '#ec4899',
            work: '#f59e0b',
            family: '#10b981',
            social: '#06b6d4',
            digital: '#6366f1',
            financial: '#84cc16'
        };
        return colors[category] || '#6b7280';
    },

    help() {
        return `
            <ul>
                <li>Create clear boundary statements for different areas of your life</li>
                <li>Prepare responses for when boundaries are crossed</li>
                <li>Organize boundaries by category for easy reference</li>
                <li>Practice enforcing boundaries in simulated scenarios</li>
                <li>Build confidence through repetition and preparation</li>
                <li>Remember: Boundaries are about self-care, not controlling others</li>
            </ul>
        `;
    }
};