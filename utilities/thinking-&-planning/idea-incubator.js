// Idea Incubator - Enhanced implementation from pseudocode
export default {
    init() {
        return {
            input: '',
            results: null,
            history: JSON.parse(localStorage.getItem('idea-incubator-history') || '[]'),
            settings: JSON.parse(localStorage.getItem('idea-incubator-settings') || '{}')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Idea Incubator</h2>
                <p>Let ideas mature and develop over time</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>Input</h3>
                    <div class="form-group">
                        <label class="label">Your idea to incubate:</label>
                        <textarea
                            class="textarea"
                            id="main-input"
                            placeholder="An app that helps people..."
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

                    localStorage.setItem('idea-incubator-history', JSON.stringify(newHistory));
                    setState({
                        results: results,
                        history: newHistory
                    });
                }
            });
        }
    },

    
    process(input) {
        const idea = input;
        const stages = ['Embryo', 'Seedling', 'Sprout', 'Plant', 'Tree'];

        // Calculate maturity based on idea details
        const wordCount = idea.split(' ').length;
        const hasAction = idea.includes('will') || idea.includes('going to');
        const hasDetail = wordCount > 20;

        let maturityLevel = 0;
        if (wordCount > 5) maturityLevel++;
        if (wordCount > 15) maturityLevel++;
        if (hasAction) maturityLevel++;
        if (hasDetail) maturityLevel++;

        const currentStage = stages[Math.min(maturityLevel, stages.length - 1)];

        // Generate growth suggestions
        const growthTips = this.getGrowthTips(currentStage);
        const connections = this.findConnections(idea);

        return {
            idea: idea,
            currentStage: currentStage,
            maturityLevel: maturityLevel + 1,
            growthTips: growthTips,
            connections: connections,
            daysToMature: (5 - maturityLevel) * 3,
            nextSteps: this.getNextSteps(currentStage),
            summary: `Idea at ${currentStage} stage, ${5 - maturityLevel} stages to full maturity`
        };
    },

    getGrowthTips(stage) {
        const tips = {
            'Embryo': ['Add more details', 'Consider the why', 'Explore possibilities'],
            'Seedling': ['Define clear goals', 'Research similar ideas', 'Identify resources'],
            'Sprout': ['Create action plan', 'Set timelines', 'Find collaborators'],
            'Plant': ['Start implementation', 'Track progress', 'Iterate based on feedback'],
            'Tree': ['Scale and expand', 'Share with others', 'Measure impact']
        };
        return tips[stage] || [];
    },

    findConnections(idea) {
        return ['Related concept 1', 'Similar project', 'Potential resource'];
    },

    getNextSteps(stage) {
        return ['Let it sit for a day', 'Add three new details', 'Share with someone'];
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
                <li>Nurture ideas through maturity stages</li>
                <li>Enter your input and click Process</li>
                <li>View detailed results and analysis</li>
                <li>History is saved locally</li>
            </ul>
        `;
    }
};