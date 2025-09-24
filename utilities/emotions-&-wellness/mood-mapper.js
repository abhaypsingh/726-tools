// Mood Mapper - Enhanced implementation from pseudocode
export default {
    init() {
        return {
            input: '',
            results: null,
            history: JSON.parse(localStorage.getItem('mood-mapper-history') || '[]'),
            settings: JSON.parse(localStorage.getItem('mood-mapper-settings') || '{}')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Mood Mapper</h2>
                <p>Map emotional states on valence-arousal grid</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>Input</h3>
                    <div class="form-group">
                        <label class="label">Current mood:</label>
                        <textarea
                            class="textarea"
                            id="main-input"
                            placeholder="anxious but hopeful"
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

                    localStorage.setItem('mood-mapper-history', JSON.stringify(newHistory));
                    setState({
                        results: results,
                        history: newHistory
                    });
                }
            });
        }
    },

    
    process(input) {
        const mood = input.toLowerCase();

        // Map mood to coordinates
        const valence = this.calculateValence(mood); // -10 to +10
        const arousal = this.calculateArousal(mood); // -10 to +10

        // Identify patterns
        const pattern = this.identifyPattern(valence, arousal);
        const triggers = this.findTriggers(mood);
        const forecast = this.predictTrajectory(valence, arousal);

        return {
            currentMood: mood,
            coordinates: {
                valence: valence,
                arousal: arousal,
                quadrant: this.getQuadrant(valence, arousal)
            },
            pattern: pattern,
            triggers: triggers,
            forecast: forecast,
            suggestions: this.getSuggestions(valence, arousal),
            visualization: this.createMoodMap(valence, arousal),
            summary: `Mood mapped: ${mood} at (${valence}, ${arousal})`
        };
    },

    calculateValence(mood) {
        const positive = ['happy', 'joyful', 'excited', 'content'];
        const negative = ['sad', 'angry', 'frustrated', 'anxious'];

        if (positive.some(p => mood.includes(p))) return Math.random() * 10;
        if (negative.some(n => mood.includes(n))) return -Math.random() * 10;
        return 0;
    },

    calculateArousal(mood) {
        const high = ['excited', 'angry', 'anxious', 'energetic'];
        const low = ['tired', 'calm', 'depressed', 'peaceful'];

        if (high.some(h => mood.includes(h))) return Math.random() * 10;
        if (low.some(l => mood.includes(l))) return -Math.random() * 10;
        return 0;
    },

    getQuadrant(valence, arousal) {
        if (valence > 0 && arousal > 0) return 'Excited/Happy';
        if (valence > 0 && arousal <= 0) return 'Calm/Content';
        if (valence <= 0 && arousal > 0) return 'Stressed/Angry';
        return 'Sad/Tired';
    },

    identifyPattern(valence, arousal) {
        return valence > 0 ? 'Positive trend' : 'Needs attention';
    },

    findTriggers(mood) {
        return ['Recent events', 'Sleep quality', 'Social interactions'];
    },

    predictTrajectory(valence, arousal) {
        return 'Likely to improve with intervention';
    },

    getSuggestions(valence, arousal) {
        const suggestions = [];
        if (valence < 0) suggestions.push('Practice gratitude');
        if (arousal > 5) suggestions.push('Try calming exercises');
        if (arousal < -5) suggestions.push('Engage in energizing activity');
        return suggestions;
    },

    createMoodMap(valence, arousal) {
        return {
            type: 'coordinate-plot',
            x: valence,
            y: arousal,
            quadrants: ['Happy', 'Calm', 'Sad', 'Stressed']
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
                <li>Understand your emotional patterns</li>
                <li>Enter your input and click Process</li>
                <li>View detailed results and analysis</li>
                <li>History is saved locally</li>
            </ul>
        `;
    }
};