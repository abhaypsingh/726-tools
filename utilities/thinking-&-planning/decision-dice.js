// Decision Dice - Enhanced implementation from pseudocode
export default {
    init() {
        return {
            input: '',
            results: null,
            history: JSON.parse(localStorage.getItem('decision-dice-history') || '[]'),
            settings: JSON.parse(localStorage.getItem('decision-dice-settings') || '{}')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Decision Dice</h2>
                <p>Make decisions using weighted random selection</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>Input</h3>
                    <div class="form-group">
                        <label class="label">Options (comma-separated):</label>
                        <textarea
                            class="textarea"
                            id="main-input"
                            placeholder="Option 1, Option 2, Option 3"
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

                    localStorage.setItem('decision-dice-history', JSON.stringify(newHistory));
                    setState({
                        results: results,
                        history: newHistory
                    });
                }
            });
        }
    },

    
    process(input) {
        const options = input.split(',').map(o => o.trim());

        // Generate weights for each option
        const weights = options.map(() => Math.random());
        const totalWeight = weights.reduce((a, b) => a + b, 0);
        const normalized = weights.map(w => w / totalWeight);

        // Roll the dice
        const roll = Math.random();
        let cumulative = 0;
        let selected = null;

        for (let i = 0; i < options.length; i++) {
            cumulative += normalized[i];
            if (roll <= cumulative) {
                selected = options[i];
                break;
            }
        }

        return {
            options: options,
            weights: normalized.map(w => (w * 100).toFixed(1) + '%'),
            selected: selected || options[0],
            reasoning: 'Weighted random selection based on probability',
            alternativeOrder: [...options].sort(() => Math.random() - 0.5),
            summary: `Selected: ${selected || options[0]} from ${options.length} options`
        };
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
                <li>Let weighted randomness help you decide</li>
                <li>Enter your input and click Process</li>
                <li>View detailed results and analysis</li>
                <li>History is saved locally</li>
            </ul>
        `;
    }
};