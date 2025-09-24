// Utility Template Generator - Creates basic implementations for all utilities
export function generateUtility(config) {
    const {
        id,
        name,
        description,
        category,
        complexity = 'S',
        inputType = 'text', // text, number, list, canvas, audio
        outputType = 'result', // result, visualization, download, audio
        features = []
    } = config;

    return {
        init() {
            return {
                input: inputType === 'list' ? [] : '',
                output: null,
                history: [],
                settings: {},
                processing: false
            };
        },

        render(container, state, setState) {
            container.innerHTML = `
                <div class="utility-workspace">
                    <h2>${name}</h2>
                    <p>${description}</p>

                    ${this.renderInput(inputType, state, setState)}
                    ${this.renderControls(features, state, setState)}
                    ${this.renderOutput(outputType, state)}
                    ${this.renderHistory(state)}
                </div>
            `;

            this.setupEventListeners(container, state, setState);
        },

        renderInput(type, state, setState) {
            switch (type) {
                case 'text':
                    return `
                        <div class="form-group">
                            <label class="label">Input:</label>
                            <textarea
                                class="textarea"
                                id="main-input"
                                placeholder="Enter your ${name.toLowerCase()} input..."
                            >${state.input || ''}</textarea>
                        </div>
                    `;

                case 'number':
                    return `
                        <div class="form-group">
                            <label class="label">Value:</label>
                            <input
                                type="number"
                                class="input"
                                id="main-input"
                                value="${state.input || ''}"
                            />
                        </div>
                    `;

                case 'list':
                    return `
                        <div class="form-group">
                            <label class="label">Add Items:</label>
                            <div style="display: flex; gap: 10px;">
                                <input
                                    type="text"
                                    class="input"
                                    id="list-input"
                                    placeholder="Add item..."
                                />
                                <button class="btn btn-secondary" id="add-item-btn">Add</button>
                            </div>
                            ${state.input.length > 0 ? `
                                <div style="margin-top: 10px;">
                                    ${state.input.map((item, i) => `
                                        <div style="padding: 5px; background: var(--color-neutral-100); margin: 5px 0; border-radius: 4px; display: flex; justify-content: space-between;">
                                            <span>${item}</span>
                                            <button class="btn btn-ghost" data-remove="${i}">×</button>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `;

                case 'canvas':
                    return `
                        <div class="canvas-container">
                            <canvas id="main-canvas"></canvas>
                        </div>
                    `;

                case 'audio':
                    return `
                        <div class="form-group">
                            <button class="btn btn-primary" id="record-btn">
                                ${state.recording ? '⏹ Stop Recording' : '🎤 Start Recording'}
                            </button>
                        </div>
                    `;

                case 'slider':
                    return `
                        <div class="slider-container">
                            <input
                                type="range"
                                class="slider"
                                id="main-slider"
                                min="0"
                                max="100"
                                value="${state.input || 50}"
                            />
                            <span>${state.input || 50}</span>
                        </div>
                    `;

                default:
                    return '';
            }
        },

        renderControls(features, state, setState) {
            return `
                <div class="utility-controls">
                    <button class="btn btn-primary" id="process-btn" ${state.processing ? 'disabled' : ''}>
                        ${state.processing ? 'Processing...' : 'Process'}
                    </button>
                    ${features.includes('reset') ? '<button class="btn btn-secondary" id="reset-btn">Reset</button>' : ''}
                    ${features.includes('save') ? '<button class="btn btn-ghost" id="save-btn">Save</button>' : ''}
                    ${features.includes('export') ? '<button class="btn btn-ghost" id="export-btn">Export</button>' : ''}
                </div>
            `;
        },

        renderOutput(type, state) {
            if (!state.output) return '';

            switch (type) {
                case 'result':
                    return `
                        <div class="result-box">
                            <h3>Result</h3>
                            <div>${state.output}</div>
                        </div>
                    `;

                case 'visualization':
                    return `
                        <div class="canvas-container">
                            <canvas id="output-canvas"></canvas>
                        </div>
                    `;

                case 'list':
                    return `
                        <div class="result-box">
                            <h3>Results</h3>
                            <ul>
                                ${Array.isArray(state.output) ?
                                    state.output.map(item => `<li>${item}</li>`).join('') :
                                    '<li>No results</li>'
                                }
                            </ul>
                        </div>
                    `;

                case 'chart':
                    return `
                        <div class="result-box">
                            <h3>Analysis</h3>
                            <div id="chart-container"></div>
                        </div>
                    `;

                default:
                    return '';
            }
        },

        renderHistory(state) {
            if (!state.history || state.history.length === 0) return '';

            return `
                <div class="card" style="margin-top: 20px;">
                    <h3>History</h3>
                    <div style="max-height: 200px; overflow-y: auto;">
                        ${state.history.slice(-5).reverse().map(entry => `
                            <div style="padding: 5px; border-bottom: 1px solid var(--color-neutral-200);">
                                <small>${new Date(entry.timestamp).toLocaleString()}</small>
                                <div>${entry.value}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        },

        setupEventListeners(container, state, setState) {
            // Basic input handlers
            const mainInput = container.querySelector('#main-input');
            if (mainInput) {
                mainInput.addEventListener('input', (e) => {
                    setState({ input: e.target.value });
                });
            }

            // List input
            const listInput = container.querySelector('#list-input');
            const addBtn = container.querySelector('#add-item-btn');
            if (listInput && addBtn) {
                addBtn.addEventListener('click', () => {
                    if (listInput.value) {
                        setState({
                            input: [...(state.input || []), listInput.value]
                        });
                        listInput.value = '';
                    }
                });
            }

            // Remove list items
            container.querySelectorAll('[data-remove]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt(e.target.dataset.remove);
                    setState({
                        input: state.input.filter((_, i) => i !== index)
                    });
                });
            });

            // Slider
            const slider = container.querySelector('#main-slider');
            if (slider) {
                slider.addEventListener('input', (e) => {
                    setState({ input: e.target.value });
                });
            }

            // Process button
            const processBtn = container.querySelector('#process-btn');
            if (processBtn) {
                processBtn.addEventListener('click', () => {
                    this.process(state, setState);
                });
            }

            // Reset button
            const resetBtn = container.querySelector('#reset-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    setState({
                        input: inputType === 'list' ? [] : '',
                        output: null
                    });
                });
            }

            // Save button
            const saveBtn = container.querySelector('#save-btn');
            if (saveBtn) {
                saveBtn.addEventListener('click', () => {
                    const history = [...(state.history || []), {
                        value: state.output,
                        timestamp: Date.now()
                    }];
                    setState({ history });
                    localStorage.setItem(`${id}-history`, JSON.stringify(history));
                });
            }

            // Export button
            const exportBtn = container.querySelector('#export-btn');
            if (exportBtn) {
                exportBtn.addEventListener('click', () => {
                    this.export(state);
                });
            }
        },

        process(state, setState) {
            setState({ processing: true });

            setTimeout(() => {
                // Generic processing based on utility type
                let output = this.generateOutput(state.input, config);

                setState({
                    output,
                    processing: false
                });
            }, 500);
        },

        generateOutput(input, config) {
            // Generic output generation based on utility config
            switch (config.processingType) {
                case 'transform':
                    return `Transformed: ${input}`;

                case 'analyze':
                    return `Analysis: ${input ? input.length : 0} characters`;

                case 'generate':
                    return `Generated result for: ${input}`;

                case 'calculate':
                    const num = parseFloat(input) || 0;
                    return `Result: ${num * 2}`;

                case 'random':
                    const options = Array.isArray(input) ? input : [input];
                    return options[Math.floor(Math.random() * options.length)];

                default:
                    return `Processed: ${input}`;
            }
        },

        export(state) {
            const data = {
                utility: name,
                timestamp: new Date().toISOString(),
                input: state.input,
                output: state.output,
                history: state.history
            };

            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${id}-export.json`;
            a.click();
            URL.revokeObjectURL(url);
        },

        help() {
            return `
                <ul>
                    <li>${description}</li>
                    <li>Enter your input and click Process</li>
                    <li>Results will appear below</li>
                    <li>All processing happens in your browser</li>
                    <li>Your data is never sent anywhere</li>
                </ul>
            `;
        }
    };
}

// Batch generator for creating multiple utilities
export function generateUtilities(configs) {
    const utilities = {};

    configs.forEach(config => {
        utilities[config.id] = generateUtility(config);
    });

    return utilities;
}