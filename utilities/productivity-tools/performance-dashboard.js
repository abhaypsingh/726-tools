// Performance Dashboard - Monitor overall performance
export default {
    init() {
        return {
            metrics: [],
            goals: [],
            achievements: []
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Performance Dashboard</h2>
                <p>Monitor and track your overall performance metrics</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>Key Metrics</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                        <div style="text-align: center; padding: 20px; background: var(--color-primary-50); border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: bold;">${state.metrics.length}</div>
                            <div>Tracked Metrics</div>
                        </div>
                        <div style="text-align: center; padding: 20px; background: var(--color-success-50); border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: bold;">${state.goals.length}</div>
                            <div>Active Goals</div>
                        </div>
                        <div style="text-align: center; padding: 20px; background: var(--color-warning-50); border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: bold;">${state.achievements.length}</div>
                            <div>Achievements</div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3>Quick Actions</h3>
                    <div style="display: grid; gap: 10px;">
                        <button class="btn btn-primary" id="add-metric">Add New Metric</button>
                        <button class="btn btn-secondary" id="add-goal">Set New Goal</button>
                        <button class="btn btn-success" id="add-achievement">Log Achievement</button>
                    </div>
                </div>
            </div>
        `;

        this.setupEventListeners(container, state, setState);
    },

    setupEventListeners(container, state, setState) {
        container.querySelector('#add-metric')?.addEventListener('click', () => {
            const metric = prompt('Enter metric name:');
            if (metric) {
                setState({ metrics: [...state.metrics, { name: metric, value: 0 }] });
            }
        });

        container.querySelector('#add-goal')?.addEventListener('click', () => {
            const goal = prompt('Enter goal:');
            if (goal) {
                setState({ goals: [...state.goals, { name: goal, status: 'active' }] });
            }
        });

        container.querySelector('#add-achievement')?.addEventListener('click', () => {
            const achievement = prompt('What did you achieve?');
            if (achievement) {
                setState({ achievements: [...state.achievements, { name: achievement, date: Date.now() }] });
            }
        });
    },

    help() {
        return `<ul>
            <li>Track key performance metrics</li>
            <li>Set and monitor goals</li>
            <li>Log achievements</li>
        </ul>`;
    }
};