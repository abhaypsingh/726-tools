// Noise Generator - A utility in the Audio & Sound category
export default {
    init() {
        return {
            input: '',
            results: [],
            settings: JSON.parse(localStorage.getItem('noise-generator-settings') || '{}'),
            history: JSON.parse(localStorage.getItem('noise-generator-history') || '[]')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Noise Generator</h2>
                <p>A powerful tool for audio & sound tasks</p>

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

                    localStorage.setItem('noise-generator-history', JSON.stringify(newHistory));
                    setState({
                        results: [result],
                        history: newHistory
                    });
                }
            });
        }
    },

    process(input) {
        // Processing logic for Noise Generator
        const words = input.split(' ');
        const analysis = {
            input: input,
            wordCount: words.length,
            charCount: input.length,
            timestamp: new Date().toISOString(),
            category: 'Audio & Sound',
            summary: `Processed ${words.length} words`
        };

        // Add category-specific processing
        
        analysis.frequency = Math.round(20 + Math.random() * 20000) + ' Hz';
        analysis.volume = Math.round(Math.random() * 100) + ' dB';

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
