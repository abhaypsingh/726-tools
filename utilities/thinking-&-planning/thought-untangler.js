// Thought Untangler - Enhanced implementation from pseudocode
export default {
    init() {
        return {
            input: '',
            results: null,
            history: JSON.parse(localStorage.getItem('thought-untangler-history') || '[]'),
            settings: JSON.parse(localStorage.getItem('thought-untangler-settings') || '{}')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Thought Untangler</h2>
                <p>Organize complex thoughts into clear themes and connections</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>Input</h3>
                    <div class="form-group">
                        <label class="label">Complex thought or idea:</label>
                        <textarea
                            class="textarea"
                            id="main-input"
                            placeholder="I'm thinking about how to balance work and life..."
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

                    localStorage.setItem('thought-untangler-history', JSON.stringify(newHistory));
                    setState({
                        results: results,
                        history: newHistory
                    });
                }
            });
        }
    },

    
    process(input) {
        const words = input.split(' ');
        const themes = words.filter(w => w.length > 4);

        // Build connections between themes
        const connections = [];
        themes.forEach((theme, i) => {
            if (themes[i + 1]) {
                connections.push({
                    from: theme,
                    to: themes[i + 1],
                    strength: Math.random()
                });
            }
        });

        // Calculate clarity score
        const clarityScore = Math.min(100, themes.length * 10 + connections.length * 5);

        return {
            mainThemes: themes.slice(0, 5),
            connections: connections,
            clarityScore: clarityScore,
            suggestions: [
                'Break down complex ideas into simpler parts',
                'Focus on one theme at a time',
                'Look for patterns in your thinking'
            ],
            visualization: this.createMindMap(themes, connections),
            summary: `Identified ${themes.length} themes with ${connections.length} connections. Clarity: ${clarityScore}%`
        };
    },

    createMindMap(themes, connections) {
        return {
            nodes: themes.map(t => ({ id: t, label: t })),
            edges: connections,
            type: 'network'
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
                <li>Break down complex thoughts into manageable themes</li>
                <li>Enter your input and click Process</li>
                <li>View detailed results and analysis</li>
                <li>History is saved locally</li>
            </ul>
        `;
    }
};