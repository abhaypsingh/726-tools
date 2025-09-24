// Energy Optimizer - Optimize energy throughout the day
export default {
    init() {
        return {
            energyLevels: [],
            currentLevel: 5,
            activities: [],
            recommendations: []
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Energy Optimizer</h2>
                <p>Track and optimize your energy levels throughout the day</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>Current Energy Level</h3>
                    <div style="display: flex; gap: 10px; justify-content: center; margin: 20px 0;">
                        ${[1,2,3,4,5,6,7,8,9,10].map(n => `
                            <button class="btn ${state.currentLevel === n ? 'btn-primary' : 'btn-secondary'}"
                                    data-level="${n}" style="width: 40px; height: 40px;">
                                ${n}
                            </button>
                        `).join('')}
                    </div>
                    <button class="btn btn-primary" id="log-energy">Log Energy Level</button>
                </div>

                <div class="card">
                    <h3>Energy Optimization Tips</h3>
                    <ul>
                        ${state.currentLevel <= 3 ? '<li>Take a 5-minute walk</li><li>Do some stretches</li><li>Drink water</li>' : ''}
                        ${state.currentLevel >= 7 ? '<li>Perfect time for deep work!</li><li>Tackle challenging tasks</li>' : ''}
                        <li>Energy peaks typically occur 2-3 hours after waking</li>
                        <li>Post-lunch dip is normal - plan easier tasks</li>
                    </ul>
                </div>
            </div>
        `;

        this.setupEventListeners(container, state, setState);
    },

    setupEventListeners(container, state, setState) {
        container.querySelectorAll('[data-level]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                setState({ currentLevel: parseInt(e.target.dataset.level) });
            });
        });

        const logBtn = container.querySelector('#log-energy');
        if (logBtn) {
            logBtn.addEventListener('click', () => {
                const newLevels = [...state.energyLevels, {
                    level: state.currentLevel,
                    time: new Date().toISOString()
                }];
                setState({ energyLevels: newLevels });
            });
        }
    },

    help() {
        return `<ul>
            <li>Track your energy levels throughout the day</li>
            <li>Identify your peak performance times</li>
            <li>Get recommendations for energy management</li>
        </ul>`;
    }
};