// Idea Incubator - Incubate ideas optimally
export default {
    init() {
        return {
            input: '',
            output: null,
            processing: false,
            history: JSON.parse(localStorage.getItem('idea-incubator-history') || '[]'),
            settings: JSON.parse(localStorage.getItem('idea-incubator-settings') || '{}')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Idea Incubator</h2>
                <p>Incubate ideas optimally</p>

                <div class="form-group">
                    <label class="label">Duration (seconds):</label>
                    <input type="number" class="input" id="duration-input" value="${state.input || 60}" min="1" max="3600" />
                </div>

                <div class="utility-controls">
                    <button class="btn btn-primary" id="process-btn" ${state.processing ? 'disabled' : ''}>
                        ${state.processing ? 'Processing...' : 'Start Timer'}
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
                <div>
                    ${state.output ? `
                        <p>${state.output.message}</p>
                        <p>Duration: ${state.output.duration} seconds</p>
                    ` : ''}
                </div>
            </div>
        `;
    },

    setupEventListeners(container, state, setState) {
        const durationInput = container.querySelector('#duration-input');
        if (durationInput) {
            durationInput.addEventListener('input', (e) => {
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
            const result = this.startTimer(state.input);
            setState({
                output: result,
                processing: false,
                history: [...state.history.slice(-9), {
                    input: state.input,
                    output: result,
                    timestamp: Date.now()
                }]
            });
            localStorage.setItem('idea-incubator-history', JSON.stringify(state.history));
        }, 100);
    },

    startTimer(duration) {
        return {
            duration: duration || 60,
            startTime: Date.now(),
            message: 'Timer started for ' + (duration || 60) + ' seconds'
        };
    }

    help() {
        return `
            <ul>
                <li>Incubate ideas optimally</li>
                <li>Set a timer duration and start counting</li>
                <li>All processing happens locally in your browser</li>
                <li>Your data is never sent anywhere</li>
            </ul>
        `;
    }
};