// Fear Factorizer - Break fears into components
export default {
    init() {
        return {
            input: '',
            output: null,
            processing: false,
            history: JSON.parse(localStorage.getItem('fear-factorizer-history') || '[]'),
            settings: JSON.parse(localStorage.getItem('fear-factorizer-settings') || '{}')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Fear Factorizer</h2>
                <p>Break fears into components</p>

                <div class="form-group">
                    <label class="label">Input:</label>
                    <textarea class="textarea" id="main-input" placeholder="Enter your input...">${state.input}</textarea>
                </div>

                <div class="utility-controls">
                    <button class="btn btn-primary" id="process-btn" ${state.processing ? 'disabled' : ''}>
                        ${state.processing ? 'Processing...' : 'Analyze'}
                    </button>
                    <button class="btn btn-secondary" id="reset-btn">Reset</button>
                    
                </div>

                ${state.output ? this.renderOutput(state) : ''}

                ${state.history.length > 0 ? `
                <div class="card" style="margin-top: 20px;">
                    <h3>History</h3>
                    <div style="max-height: 200px; overflow-y: auto;">
                        ${state.history.slice(-5).reverse().map(entry => `
                            <div style="padding: 8px; border-bottom: 1px solid var(--color-neutral-200);">
                                <small>${new Date(entry.timestamp).toLocaleString()}</small>
                                <div>${typeof entry.output === 'object' ? entry.output.summary || 'Processed' : entry.output}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            </div>
        `;

        this.setupEventListeners(container, state, setState);
    },

    renderOutput(state) {
        return `
            <div class="result-box">
                <h3>Result</h3>
                <div>${typeof state.output === 'object' ? JSON.stringify(state.output, null, 2) : state.output}</div>
            </div>
        `;
    },

    setupEventListeners(container, state, setState) {
        const mainInput = container.querySelector('#main-input');
        if (mainInput) {
            mainInput.addEventListener('input', (e) => {
                setState({ input: e.target.value });
            });
        }

        const processBtn = container.querySelector('#process-btn');
        if (processBtn) {
            processBtn.addEventListener('click', () => {
                this.process(state, setState);
            });
        }

        const resetBtn = container.querySelector('#reset-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                setState({
                    input: '',
                    output: null
                });
            });
        }
    },

    process(state, setState) {
        setState({ processing: true });

        setTimeout(() => {
            const result = this.analyze(state.input);
            setState({
                output: result,
                processing: false,
                history: [...state.history.slice(-9), {
                    input: state.input,
                    output: result,
                    timestamp: Date.now()
                }]
            });
            localStorage.setItem('fear-factorizer-history', JSON.stringify(state.history));
        }, 800);
    },

    analyze(input) {
        const analysis = {
            length: input.length,
            words: input.split(/\s+/).length,
            sentences: input.split(/[.!?]+/).length - 1,
            complexity: input.length > 100 ? 'Complex' : 'Simple'
        };
        return analysis;
    }

    help() {
        return `
            <ul>
                <li>Break fears into components</li>
                <li>Input data for analysis</li>
                <li>All processing happens locally in your browser</li>
                <li>Your data is never sent anywhere</li>
            </ul>
        `;
    }
};