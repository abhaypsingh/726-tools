// Conversion Kitchen - A utility in the Food & Cooking category
export default {
    init() {
        return {
            input: '',
            results: [],
            settings: JSON.parse(localStorage.getItem('conversion-kitchen-settings') || '{}'),
            history: JSON.parse(localStorage.getItem('conversion-kitchen-history') || '[]')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Conversion Kitchen</h2>
                <p>A powerful tool for food & cooking tasks</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>Input</h3>
                    <div class="form-group">
                        <textarea
                            class="textarea"
                            id="input-field"
                            placeholder="Enter your data..."
                            style="min-height: 100px;"
                        >${state.input}</textarea>
                    </div>

                    <button class="btn btn-primary" id="process-btn">
                        Process
                    </button>
                </div>

                ${state.results.length > 0 ? `
                    <div class="card">
                        <h3>Results</h3>
                        <div class="results-display">
                            ${state.results.map(r => `
                                <div class="result-item" style="padding: 10px; background: var(--color-neutral-100); border-radius: 8px; margin: 5px 0;">
                                    ${JSON.stringify(r, null, 2)}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <div class="card" style="margin-top: 20px;">
                    <h3>History</h3>
                    ${state.history.length === 0 ? `
                        <p style="color: var(--color-neutral-500);">No history yet</p>
                    ` : `
                        <div class="history-list">
                            ${state.history.slice(-5).reverse().map(item => `
                                <div style="padding: 8px; border-bottom: 1px solid var(--color-neutral-200);">
                                    <small>${new Date(item.timestamp).toLocaleString()}</small>
                                    <div>${item.summary}</div>
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
        const input = container.querySelector('#input-field');
        const processBtn = container.querySelector('#process-btn');

        if (input) {
            input.addEventListener('input', (e) => {
                setState({ input: e.target.value });
            });
        }

        if (processBtn) {
            processBtn.addEventListener('click', () => {
                if (state.input) {
                    const result = this.process(state.input);
                    const newHistory = [...state.history, {
                        input: state.input,
                        summary: result.summary || 'Processed',
                        timestamp: Date.now()
                    }];

                    if (newHistory.length > 50) newHistory.shift();

                    localStorage.setItem('conversion-kitchen-history', JSON.stringify(newHistory));
                    setState({
                        results: [result],
                        history: newHistory
                    });
                }
            });
        }
    },

    process(input) {
        // Processing logic for Conversion Kitchen
        const words = input.split(' ');
        const analysis = {
            input: input,
            wordCount: words.length,
            charCount: input.length,
            timestamp: new Date().toISOString(),
            category: 'Food & Cooking',
            summary: `Processed ${words.length} words`
        };

        // Add category-specific processing
        
        analysis.ingredients = words.filter(w => w.length > 3);
        analysis.cookingTime = Math.round(10 + Math.random() * 50) + ' minutes';

        return analysis;
    },

    help() {
        return `
            <ul>
                <li>Enter your input in the text field</li>
                <li>Click Process to analyze</li>
                <li>View results and history</li>
                <li>Data is stored locally for privacy</li>
            </ul>
        `;
    }
};
