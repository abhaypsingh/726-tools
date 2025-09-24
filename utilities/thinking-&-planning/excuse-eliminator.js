// Excuse Eliminator - Transform excuses into action plans
export default {
    init() {
        return {
            excuse: '',
            analysis: null,
            actionPlan: null,
            history: JSON.parse(localStorage.getItem('excuse-eliminator-history') || '[]')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Excuse Eliminator</h2>
                <p>Transform your excuses into actionable plans and overcome procrastination</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>What's Your Excuse?</h3>
                    <div class="form-group">
                        <label class="label">Enter the excuse you're making:</label>
                        <textarea
                            class="textarea"
                            id="excuse-input"
                            placeholder="e.g., 'I don't have time to exercise' or 'I'm not good enough to apply for that job'"
                            style="min-height: 100px;"
                        >${state.excuse}</textarea>
                    </div>

                    <button class="btn btn-primary" id="eliminate-btn">
                        Eliminate This Excuse
                    </button>
                </div>

                ${state.analysis ? `
                    <div class="card" style="margin: 20px 0;">
                        <h3>Excuse Analysis</h3>
                        <div style="display: grid; gap: 15px;">
                            <div>
                                <h4>Root Cause:</h4>
                                <p>${state.analysis.rootCause}</p>
                            </div>
                            <div>
                                <h4>Fear Behind It:</h4>
                                <p>${state.analysis.fear}</p>
                            </div>
                            <div>
                                <h4>Cost of This Excuse:</h4>
                                <p>${state.analysis.cost}</p>
                            </div>
                        </div>
                    </div>
                ` : ''}

                ${state.actionPlan ? `
                    <div class="card" style="margin: 20px 0; border: 2px solid var(--color-success);">
                        <h3>Your Action Plan</h3>
                        <div style="margin: 20px 0;">
                            <h4>Reframe:</h4>
                            <p style="font-size: 1.125rem; font-weight: 600; color: var(--color-primary);">
                                "${state.actionPlan.reframe}"
                            </p>
                        </div>

                        <div>
                            <h4>Immediate Actions:</h4>
                            <ul>
                                ${state.actionPlan.immediateActions.map(action => `
                                    <li style="margin: 10px 0;">
                                        <label class="checkbox-label">
                                            <input type="checkbox" />
                                            ${action}
                                        </label>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>

                        <div style="margin-top: 20px;">
                            <h4>This Week:</h4>
                            <ul>
                                ${state.actionPlan.weekActions.map(action => `
                                    <li>${action}</li>
                                `).join('')}
                            </ul>
                        </div>

                        <div style="margin-top: 20px;">
                            <h4>Accountability:</h4>
                            <p>${state.actionPlan.accountability}</p>
                        </div>

                        <button class="btn btn-secondary" id="save-plan-btn" style="margin-top: 20px;">
                            Save This Plan
                        </button>
                    </div>
                ` : ''}

                ${state.history.length > 0 ? `
                    <div class="card">
                        <h3>Previous Excuses Eliminated</h3>
                        <div style="display: grid; gap: 10px;">
                            ${state.history.slice(-5).reverse().map(item => `
                                <div style="padding: 10px; background: var(--color-neutral-100); border-radius: 8px;">
                                    <div style="display: flex; justify-content: space-between;">
                                        <strong>${item.excuse}</strong>
                                        <small>${new Date(item.date).toLocaleDateString()}</small>
                                    </div>
                                    <div style="margin-top: 5px; color: var(--color-success);">
                                        ✓ Transformed into: ${item.reframe}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;

        this.setupEventListeners(container, state, setState);
    },

    setupEventListeners(container, state, setState) {
        const excuseInput = container.querySelector('#excuse-input');
        if (excuseInput) {
            excuseInput.addEventListener('input', (e) => {
                setState({ excuse: e.target.value });
            });
        }

        const eliminateBtn = container.querySelector('#eliminate-btn');
        if (eliminateBtn) {
            eliminateBtn.addEventListener('click', () => {
                if (state.excuse) {
                    const analysis = this.analyzeExcuse(state.excuse);
                    const actionPlan = this.createActionPlan(state.excuse, analysis);
                    setState({ analysis, actionPlan });
                }
            });
        }

        const savePlanBtn = container.querySelector('#save-plan-btn');
        if (savePlanBtn) {
            savePlanBtn.addEventListener('click', () => {
                const newHistory = [...state.history, {
                    excuse: state.excuse,
                    reframe: state.actionPlan.reframe,
                    date: Date.now()
                }];
                localStorage.setItem('excuse-eliminator-history', JSON.stringify(newHistory));
                setState({ history: newHistory });
                alert('Plan saved! You\'ve eliminated this excuse.');
            });
        }
    },

    analyzeExcuse(excuse) {
        const excuseLower = excuse.toLowerCase();

        // Analyze common excuse patterns
        let rootCause = 'Fear of change or leaving comfort zone';
        let fear = 'Fear of failure or judgment';
        let cost = 'Missed opportunities and stagnation';

        if (excuseLower.includes('time')) {
            rootCause = 'Poor prioritization or time management';
            fear = 'Fear of sacrificing other activities';
            cost = 'Goals remain unachieved, leading to regret';
        } else if (excuseLower.includes('money') || excuseLower.includes('afford')) {
            rootCause = 'Financial priorities or resource management';
            fear = 'Fear of financial insecurity';
            cost = 'Limited growth and missed investments in yourself';
        } else if (excuseLower.includes('good enough') || excuseLower.includes('qualified')) {
            rootCause = 'Imposter syndrome or low self-esteem';
            fear = 'Fear of rejection or being exposed as inadequate';
            cost = 'Self-imposed limitations and unrealized potential';
        } else if (excuseLower.includes('too late') || excuseLower.includes('too old')) {
            rootCause = 'Comparison with others or societal expectations';
            fear = 'Fear of starting behind or not catching up';
            cost = 'Never starting means guaranteed failure';
        } else if (excuseLower.includes('don\'t know') || excuseLower.includes('not sure')) {
            rootCause = 'Lack of information or analysis paralysis';
            fear = 'Fear of making the wrong decision';
            cost = 'Paralysis prevents any progress';
        }

        return { rootCause, fear, cost };
    },

    createActionPlan(excuse, analysis) {
        const excuseLower = excuse.toLowerCase();

        // Create specific action plans based on excuse type
        let reframe = excuse.replace(/I can't|I don't|I'm not/gi, "I'm learning to");
        let immediateActions = [];
        let weekActions = [];
        let accountability = 'Share this commitment with someone today';

        if (excuseLower.includes('time')) {
            reframe = "I choose how to invest my time, and this is worth it";
            immediateActions = [
                'List your daily activities for one day',
                'Identify 30 minutes of low-value activity',
                'Schedule a specific time slot this week'
            ];
            weekActions = [
                'Track where your time actually goes',
                'Start with just 15 minutes daily',
                'Gradually increase as it becomes habit'
            ];
            accountability = 'Set a daily reminder and track streak';
        } else if (excuseLower.includes('money')) {
            reframe = "I'm resourceful and can find creative solutions";
            immediateActions = [
                'Research free alternatives',
                'Calculate the real cost vs. value',
                'Identify one small step that costs nothing'
            ];
            weekActions = [
                'Create a savings plan, even $1/day',
                'Look for ways to trade skills or time',
                'Find accountability partners in similar situation'
            ];
        } else if (excuseLower.includes('good enough')) {
            reframe = "I'm exactly where I need to be to start learning";
            immediateActions = [
                'List 3 skills you DO have',
                'Find someone who started where you are',
                'Take one small action despite the fear'
            ];
            weekActions = [
                'Document your progress daily',
                'Celebrate small wins',
                'Focus on growth, not perfection'
            ];
        } else {
            immediateActions = [
                'Write down what you want to achieve',
                'Identify the smallest possible first step',
                'Do that step within 24 hours'
            ];
            weekActions = [
                'Build momentum with daily small actions',
                'Track progress visually',
                'Adjust plan based on what you learn'
            ];
        }

        return { reframe, immediateActions, weekActions, accountability };
    },

    help() {
        return `
            <ul>
                <li>Enter any excuse you're making to avoid something important</li>
                <li>The tool analyzes the root cause and hidden fears</li>
                <li>Receive a concrete action plan to overcome the excuse</li>
                <li>Transform limiting beliefs into empowering actions</li>
                <li>Track your eliminated excuses to see your growth</li>
                <li>Remember: Every excuse eliminated is a door opened</li>
            </ul>
        `;
    }
};