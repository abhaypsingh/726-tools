// Gratitude Generator - Enhanced implementation from pseudocode
export default {
    init() {
        return {
            input: '',
            results: null,
            history: JSON.parse(localStorage.getItem('gratitude-generator-history') || '[]'),
            settings: JSON.parse(localStorage.getItem('gratitude-generator-settings') || '{}')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Gratitude Generator</h2>
                <p>Generate gratitude lists across life categories</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>Input</h3>
                    <div class="form-group">
                        <label class="label">Life context (optional):</label>
                        <textarea
                            class="textarea"
                            id="main-input"
                            placeholder="work, family, or leave empty for general"
                            style="min-height: 100px;"
                        >${state.input}</textarea>
                    </div>

                    <button class="btn btn-primary" id="process-btn">
                        Process
                    </button>
                </div>

                ${state.results ? `
                    <div class="card" style="margin: 20px 0;">
                        <h3>Results</h3>
                        ${this.renderResults(state.results)}
                    </div>
                ` : ''}

                <div class="card">
                    <h3>History</h3>
                    ${state.history.length === 0 ? `
                        <p style="color: var(--color-neutral-500);">No history yet</p>
                    ` : `
                        <div class="history-list">
                            ${state.history.slice(-5).reverse().map(item => `
                                <div style="padding: 10px; background: var(--color-neutral-100); border-radius: 8px; margin: 5px 0;">
                                    <div style="display: flex; justify-content: space-between;">
                                        <strong>${item.input}</strong>
                                        <small>${new Date(item.timestamp).toLocaleString()}</small>
                                    </div>
                                    <div style="margin-top: 5px; color: var(--color-primary);">
                                        ${item.summary}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>
            </div>
        `;

        this.setupEventListeners(container, state, setState);
    },

    setupEventListeners(container, state, setState) {
        const input = container.querySelector('#main-input');
        const processBtn = container.querySelector('#process-btn');

        if (input) {
            input.addEventListener('input', (e) => {
                setState({ input: e.target.value });
            });
        }

        if (processBtn) {
            processBtn.addEventListener('click', () => {
                if (state.input) {
                    const results = this.process(state.input);

                    const historyItem = {
                        input: state.input.substring(0, 50) + (state.input.length > 50 ? '...' : ''),
                        summary: results.summary,
                        timestamp: Date.now()
                    };

                    const newHistory = [...state.history, historyItem];
                    if (newHistory.length > 50) newHistory.shift();

                    localStorage.setItem('gratitude-generator-history', JSON.stringify(newHistory));
                    setState({
                        results: results,
                        history: newHistory
                    });
                }
            });
        }
    },

    
    process(input) {
        const context = input || 'general';

        const categories = [
            'Overlooked Basics',
            'Recent Positives',
            'Growth Opportunities',
            'Supportive People',
            'Simple Pleasures'
        ];

        const gratitudeList = [];

        categories.forEach(category => {
            const items = this.generateGratitudeItems(category, context);
            gratitudeList.push({
                category: category,
                items: items,
                reflection: this.createReflection(category)
            });
        });

        const moodBoost = this.calculateMoodBoost(gratitudeList);

        return {
            gratitudeList: gratitudeList,
            totalItems: gratitudeList.reduce((sum, cat) => sum + cat.items.length, 0),
            moodBoost: moodBoost + '%',
            dailyPrompt: this.getDailyPrompt(),
            practiceGuide: [
                'Write 3 things daily',
                'Be specific',
                'Feel the emotion',
                'Share with others'
            ],
            summary: `Generated ${gratitudeList.length * 3} gratitude items across ${categories.length} categories`
        };
    },

    generateGratitudeItems(category, context) {
        const items = {
            'Overlooked Basics': ['Clean water', 'Ability to read', 'Internet access'],
            'Recent Positives': ['Good conversation', 'Completed task', 'Nice weather'],
            'Growth Opportunities': ['Learned from mistake', 'New skill developed', 'Challenge overcome'],
            'Supportive People': ['Friend who listened', 'Helpful colleague', 'Family member'],
            'Simple Pleasures': ['Morning coffee', 'Comfortable bed', 'Favorite song']
        };
        return items[category] || ['Something good'];
    },

    createReflection(category) {
        return `Reflecting on ${category} helps appreciate life more fully`;
    },

    calculateMoodBoost(list) {
        return Math.floor(20 + Math.random() * 30);
    },

    getDailyPrompt() {
        const prompts = [
            'What made you smile today?',
            'Who helped you recently?',
            'What went better than expected?'
        ];
        return prompts[Math.floor(Math.random() * prompts.length)];
    },

    renderResults(results) {
        let html = '<div style="display: grid; gap: 15px;">';

        Object.entries(results).forEach(([key, value]) => {
            if (key === 'summary') return;

            html += `<div>
                <strong>${this.formatKey(key)}:</strong>
                ${this.formatValue(value)}
            </div>`;
        });

        html += '</div>';
        return html;
    },

    formatKey(key) {
        return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    },

    formatValue(value) {
        if (Array.isArray(value)) {
            return '<ul>' + value.map(v => `<li>${v}</li>`).join('') + '</ul>';
        }
        if (typeof value === 'object') {
            return '<pre>' + JSON.stringify(value, null, 2) + '</pre>';
        }
        return value;
    },

    help() {
        return `
            <ul>
                <li>Discover things to be grateful for</li>
                <li>Enter your input and click Process</li>
                <li>View detailed results and analysis</li>
                <li>History is saved locally</li>
            </ul>
        `;
    }
};