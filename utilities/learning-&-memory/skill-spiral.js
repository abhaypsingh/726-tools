// Skill Spiral - Enhanced implementation from pseudocode
export default {
    init() {
        return {
            input: '',
            results: null,
            history: JSON.parse(localStorage.getItem('skill-spiral-history') || '[]'),
            settings: JSON.parse(localStorage.getItem('skill-spiral-settings') || '{}')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Skill Spiral</h2>
                <p>Track skill progression in ascending spirals</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>Input</h3>
                    <div class="form-group">
                        <label class="label">Skill to track:</label>
                        <textarea
                            class="textarea"
                            id="main-input"
                            placeholder="JavaScript programming"
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

                    localStorage.setItem('skill-spiral-history', JSON.stringify(newHistory));
                    setState({
                        results: results,
                        history: newHistory
                    });
                }
            });
        }
    },

    
    process(input) {
        const skill = input;
        const levels = ['Novice', 'Advanced Beginner', 'Competent', 'Proficient', 'Expert'];

        // Assess current level (mock assessment)
        const currentLevel = Math.floor(Math.random() * 3);
        const progressInLevel = Math.random() * 100;

        // Create spiral progression
        const spiral = {
            currentLevel: levels[currentLevel],
            progress: progressInLevel.toFixed(1) + '%',
            nextLevel: levels[currentLevel + 1] || 'Master',
            practiceHours: Math.floor((currentLevel + 1) * 20),

            spiralPath: this.generateSpiralPath(currentLevel, progressInLevel),

            challenges: this.getChallenges(levels[currentLevel]),
            exercises: this.getExercises(skill, levels[currentLevel]),

            timeToNextLevel: Math.floor((100 - progressInLevel) / 5) + ' practice sessions'
        };

        return {
            skill: skill,
            assessment: spiral,
            recommendations: [
                'Practice at the edge of your comfort zone',
                'Seek feedback from experts',
                'Teach others what you learn'
            ],
            summary: `${skill}: ${spiral.currentLevel} level at ${spiral.progress} progress`
        };
    },

    generateSpiralPath(level, progress) {
        return {
            radius: (level + 1) * 10,
            angle: (progress / 100) * 360,
            visualization: 'ascending-spiral'
        };
    },

    getChallenges(level) {
        const challenges = {
            'Novice': ['Master basics', 'Build foundation', 'Learn terminology'],
            'Advanced Beginner': ['Apply knowledge', 'Recognize patterns', 'Handle variations'],
            'Competent': ['Develop efficiency', 'Make decisions', 'Solve problems']
        };
        return challenges[level] || ['Continue practicing'];
    },

    getExercises(skill, level) {
        return [
            `${level} exercise 1 for ${skill}`,
            `${level} exercise 2 for ${skill}`,
            `${level} exercise 3 for ${skill}`
        ];
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
                <li>Track your journey from novice to expert</li>
                <li>Enter your input and click Process</li>
                <li>View detailed results and analysis</li>
                <li>History is saved locally</li>
            </ul>
        `;
    }
};