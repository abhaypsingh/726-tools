// Worry Window - Enhanced implementation from pseudocode
export default {
    init() {
        return {
            input: '',
            results: null,
            history: JSON.parse(localStorage.getItem('worry-window-history') || '[]'),
            settings: JSON.parse(localStorage.getItem('worry-window-settings') || '{}')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Worry Window</h2>
                <p>Schedule specific times to process worries</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>Input</h3>
                    <div class="form-group">
                        <label class="label">What are you worried about:</label>
                        <textarea
                            class="textarea"
                            id="main-input"
                            placeholder="I'm worried about..."
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

                    localStorage.setItem('worry-window-history', JSON.stringify(newHistory));
                    setState({
                        results: results,
                        history: newHistory
                    });
                }
            });
        }
    },

    
    process(input) {
        const worry = input;
        const scheduledTime = '8:00 PM'; // Default worry time
        const currentTime = new Date();

        // Check if it's worry time
        const isWorryTime = currentTime.getHours() === 20; // 8 PM

        let response = {};

        if (isWorryTime) {
            // Process the worry
            const category = this.categorizeWorry(worry);
            const actionable = this.isActionable(worry);

            response = {
                status: 'Processing worry',
                category: category,
                actionable: actionable,
                steps: actionable ? this.generateActionSteps(worry) : [],
                acceptance: !actionable ? this.generateAcceptance(worry) : '',
                processingTime: 'Now (Worry Window Open)'
            };
        } else {
            // Queue the worry
            response = {
                status: 'Worry saved for later',
                scheduledTime: scheduledTime,
                message: 'This worry will be addressed during your scheduled worry time',
                tip: 'For now, focus on the present moment'
            };
        }

        response.summary = `Worry ${isWorryTime ? 'processed' : 'queued'}`;
        return response;
    },

    categorizeWorry(worry) {
        if (worry.includes('health')) return 'Health';
        if (worry.includes('money') || worry.includes('job')) return 'Financial';
        if (worry.includes('relationship')) return 'Relationships';
        return 'General';
    },

    isActionable(worry) {
        return !worry.includes('what if') && !worry.includes('might');
    },

    generateActionSteps(worry) {
        return [
            'Identify what you can control',
            'Take one small action today',
            'Set a specific goal',
            'Ask for help if needed'
        ];
    },

    generateAcceptance(worry) {
        return 'This is beyond your control. Practice accepting uncertainty.';
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
                <li>Process worries at scheduled times only</li>
                <li>Enter your input and click Process</li>
                <li>View detailed results and analysis</li>
                <li>History is saved locally</li>
            </ul>
        `;
    }
};