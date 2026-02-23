// Impulse Interval - Create healthy pause between impulse and action
export default {
    init() {
        return {
            impulse: '',
            timerActive: false,
            timeRemaining: 0,
            timerInterval: null,
            pauseDuration: 10, // minutes
            alternatives: [],
            chosenAlternative: null,
            impulseResisted: false,
            stats: JSON.parse(localStorage.getItem('impulse-interval-stats') || '{"resisted": 0, "total": 0}'),
            history: JSON.parse(localStorage.getItem('impulse-interval-history') || '[]')
        };
    },

    render(container, state, setState) {
        const minutes = Math.floor(state.timeRemaining / 60);
        const seconds = state.timeRemaining % 60;

        container.innerHTML = `
            <div class="utility-workspace">
                <h2>⏸️ Impulse Interval</h2>
                <p>Create healthy space between urges and actions through mindful pausing</p>

                ${!state.timerActive ? `
                    <div class="card" style="margin: 20px 0;">
                        <h3>What's the Impulse?</h3>
                        <div class="form-group">
                            <label class="label">Describe what you're feeling urged to do:</label>
                            <textarea
                                class="textarea"
                                id="impulse-input"
                                placeholder="I want to check social media, buy something online, eat junk food, send an angry text..."
                                style="min-height: 80px;"
                            >${state.impulse}</textarea>
                        </div>

                        <div class="form-group">
                            <label class="label">Pause Duration (minutes):</label>
                            <div style="display: flex; align-items: center; gap: 15px;">
                                <input
                                    type="range"
                                    min="5"
                                    max="30"
                                    value="${state.pauseDuration}"
                                    id="duration-slider"
                                    style="flex: 1;"
                                />
                                <div class="badge badge-primary" style="min-width: 80px; text-align: center;">
                                    ${state.pauseDuration} min
                                </div>
                            </div>
                            <small style="display: flex; justify-content: space-between; margin-top: 5px;">
                                <span>Quick pause</span>
                                <span>Extended reflection</span>
                            </small>
                        </div>

                        <button class="btn btn-primary" id="start-interval-btn" style="width: 100%;">
                            ⏱️ Start Impulse Interval
                        </button>
                    </div>
                ` : `
                    <div class="card" style="margin: 20px 0; border: 2px solid var(--color-primary); text-align: center;">
                        <h3>Impulse Pause Active</h3>
                        <p style="margin: 10px 0; font-style: italic;">"${state.impulse.substring(0, 60)}${state.impulse.length > 60 ? '...' : ''}"</p>

                        <div style="margin: 30px 0;">
                            <div style="font-size: 3rem; font-weight: bold; color: var(--color-primary);">
                                ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}
                            </div>
                            <div style="margin-top: 10px; color: var(--color-neutral-600);">
                                Time remaining
                            </div>
                        </div>

                        ${state.alternatives.length > 0 ? `
                            <div style="margin: 20px 0;">
                                <h4>Healthier Alternatives:</h4>
                                <div style="display: grid; gap: 10px; margin: 15px 0;">
                                    ${state.alternatives.map((alt, i) => `
                                        <button class="btn ${state.chosenAlternative === i ? 'btn-success' : 'btn-secondary'} alternative-btn" data-index="${i}">
                                            ${alt.icon} ${alt.description}
                                            ${state.chosenAlternative === i ? ' ✓' : ''}
                                        </button>
                                    `).join('')}
                                </div>
                                ${state.chosenAlternative !== null ? `
                                    <div class="card" style="background: linear-gradient(135deg, #d4edda, #c3e6cb); border: 2px solid var(--color-success);">
                                        <h4>🌟 Great Choice!</h4>
                                        <p>You chose a healthier alternative. This strengthens your self-control muscle!</p>
                                    </div>
                                ` : ''}
                            </div>
                        ` : ''}

                        <div style="display: flex; gap: 10px; justify-content: center;">
                            <button class="btn btn-error" id="give-in-btn">
                                Give In to Impulse
                            </button>
                            <button class="btn btn-secondary" id="extend-pause-btn">
                                Extend Pause (+5 min)
                            </button>
                        </div>
                    </div>
                `}

                ${state.timerActive && state.timeRemaining <= 60 ? `
                    <div class="card" style="background: linear-gradient(135deg, #fff3cd, #ffeaa7); border: 2px solid var(--color-warning);">
                        <h3>⏰ Final Minute!</h3>
                        <p><strong>Ask yourself:</strong> "Do I still want to do this?"</p>
                        <div style="display: flex; gap: 10px; margin-top: 15px;">
                            <button class="btn btn-success" id="resist-impulse-btn" style="flex: 1;">
                                🏆 I've Changed My Mind
                            </button>
                            <button class="btn btn-warning" id="proceed-impulse-btn" style="flex: 1;">
                                ➡️ Yes, I Still Want This
                            </button>
                        </div>
                    </div>
                ` : ''}

                <div class="card" style="margin: 20px 0;">
                    <h3>📊 Impulse Control Stats</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 15px 0;">
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; font-weight: bold; color: var(--color-success);">
                                ${state.stats.resisted}
                            </div>
                            <div>Impulses Resisted</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);">
                                ${state.stats.total}
                            </div>
                            <div>Total Pauses</div>
                        </div>
                    </div>
                    ${state.stats.total > 0 ? `
                        <div style="margin: 15px 0;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <span>Resistance Rate</span>
                                <strong>${Math.round((state.stats.resisted / state.stats.total) * 100)}%</strong>
                            </div>
                            <div class="progress-bar" style="background: var(--color-neutral-200); height: 10px; border-radius: 5px;">
                                <div style="background: var(--color-success); height: 100%; width: ${(state.stats.resisted / state.stats.total) * 100}%; border-radius: 5px;"></div>
                            </div>
                        </div>
                    ` : ''}
                </div>

                ${state.history.length > 0 ? `
                    <div class="card">
                        <h3>Recent Impulse History</h3>
                        <div style="display: grid; gap: 10px;">
                            ${state.history.slice(-5).reverse().map(entry => `
                                <div class="card" style="background: var(--color-neutral-100);">
                                    <div style="display: flex; justify-content: space-between; align-items: start;">
                                        <div style="flex: 1;">
                                            <strong>"${entry.impulse.substring(0, 50)}${entry.impulse.length > 50 ? '...' : ''}"</strong>
                                            <div style="margin-top: 5px;">
                                                <span class="badge ${entry.resisted ? 'badge-success' : 'badge-warning'}">
                                                    ${entry.resisted ? '✓ Resisted' : '⚠ Gave In'}
                                                </span>
                                                <span class="badge badge-neutral">
                                                    ${entry.duration}min pause
                                                </span>
                                            </div>
                                        </div>
                                        <small>${new Date(entry.timestamp).toLocaleDateString()}</small>
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
        const impulseInput = container.querySelector('#impulse-input');
        if (impulseInput) {
            impulseInput.addEventListener('input', (e) => {
                setState({ impulse: e.target.value });
            });
        }

        const durationSlider = container.querySelector('#duration-slider');
        if (durationSlider) {
            durationSlider.addEventListener('input', (e) => {
                setState({ pauseDuration: parseInt(e.target.value) });
            });
        }

        const startBtn = container.querySelector('#start-interval-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                if (state.impulse.trim()) {
                    this.startImpulseInterval(state, setState);
                } else {
                    alert('Please describe your impulse first');
                }
            });
        }

        const giveInBtn = container.querySelector('#give-in-btn');
        if (giveInBtn) {
            giveInBtn.addEventListener('click', () => {
                this.endInterval(state, setState, false);
            });
        }

        const extendBtn = container.querySelector('#extend-pause-btn');
        if (extendBtn) {
            extendBtn.addEventListener('click', () => {
                setState({
                    timeRemaining: state.timeRemaining + (5 * 60),
                    pauseDuration: state.pauseDuration + 5
                });
            });
        }

        const resistBtn = container.querySelector('#resist-impulse-btn');
        if (resistBtn) {
            resistBtn.addEventListener('click', () => {
                this.endInterval(state, setState, true);
            });
        }

        const proceedBtn = container.querySelector('#proceed-impulse-btn');
        if (proceedBtn) {
            proceedBtn.addEventListener('click', () => {
                this.endInterval(state, setState, false);
            });
        }

        // Alternative buttons
        container.querySelectorAll('.alternative-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                setState({ chosenAlternative: index });

                // Auto-resist if they choose an alternative
                setTimeout(() => {
                    this.endInterval(state, setState, true);
                }, 2000);
            });
        });
    },

    startImpulseInterval(state, setState) {
        const totalSeconds = state.pauseDuration * 60;
        const alternatives = this.generateAlternatives(state.impulse);

        // Clear any existing timer
        if (state.timerInterval) {
            clearInterval(state.timerInterval);
        }

        setState({
            timerActive: true,
            timeRemaining: totalSeconds,
            alternatives,
            chosenAlternative: null
        });

        // Start countdown
        const interval = setInterval(() => {
            setState(currentState => {
                const newTimeRemaining = currentState.timeRemaining - 1;

                if (newTimeRemaining <= 0) {
                    clearInterval(interval);
                    this.endInterval(currentState, setState, null); // null means timer expired
                    return {
                        timerActive: false,
                        timeRemaining: 0,
                        timerInterval: null
                    };
                }

                return {
                    timeRemaining: newTimeRemaining,
                    timerInterval: interval
                };
            });
        }, 1000);

        setState({ timerInterval: interval });
    },

    generateAlternatives(impulse) {
        const impulseType = this.classifyImpulse(impulse);
        const baseAlternatives = [
            { icon: '🧘', description: 'Take 5 deep breaths' },
            { icon: '🚶', description: 'Go for a short walk' },
            { icon: '💧', description: 'Drink a glass of water' },
            { icon: '📝', description: 'Write down your feelings' }
        ];

        const typeSpecific = {
            social_media: [
                { icon: '📚', description: 'Read for 10 minutes' },
                { icon: '🧘', description: 'Do a brief meditation' },
                { icon: '📞', description: 'Call someone you care about' }
            ],
            shopping: [
                { icon: '⏰', description: 'Wait 24 hours and reassess' },
                { icon: '💰', description: 'Check your budget first' },
                { icon: '❓', description: 'Ask: Do I really need this?' }
            ],
            food: [
                { icon: '🥗', description: 'Choose a healthier option' },
                { icon: '😋', description: 'Eat mindfully and slowly' },
                { icon: '🕐', description: 'Wait 20 minutes for hunger cues' }
            ],
            communication: [
                { icon: '✍️', description: 'Draft it but don\'t send yet' },
                { icon: '🤔', description: 'Consider their perspective' },
                { icon: '😌', description: 'Wait until you\'re calmer' }
            ]
        };

        const specific = typeSpecific[impulseType] || [];
        const allAlternatives = [...baseAlternatives, ...specific];

        // Return 3-4 random alternatives
        return allAlternatives.sort(() => Math.random() - 0.5).slice(0, 4);
    },

    classifyImpulse(impulse) {
        const lower = impulse.toLowerCase();

        if (lower.includes('social media') || lower.includes('facebook') || lower.includes('instagram') || lower.includes('twitter') || lower.includes('tiktok')) {
            return 'social_media';
        } else if (lower.includes('buy') || lower.includes('purchase') || lower.includes('order') || lower.includes('amazon')) {
            return 'shopping';
        } else if (lower.includes('eat') || lower.includes('snack') || lower.includes('food') || lower.includes('junk')) {
            return 'food';
        } else if (lower.includes('text') || lower.includes('message') || lower.includes('email') || lower.includes('call')) {
            return 'communication';
        }

        return 'general';
    },

    endInterval(state, setState, wasResisted) {
        // Clear timer
        if (state.timerInterval) {
            clearInterval(state.timerInterval);
        }

        // Update stats
        const newStats = {
            total: state.stats.total + 1,
            resisted: state.stats.resisted + (wasResisted === true ? 1 : 0)
        };

        // Record history
        const historyEntry = {
            impulse: state.impulse,
            duration: state.pauseDuration,
            resisted: wasResisted === true,
            chosenAlternative: state.chosenAlternative !== null ? state.alternatives[state.chosenAlternative] : null,
            timestamp: Date.now()
        };

        const newHistory = [...state.history, historyEntry];
        if (newHistory.length > 50) newHistory.shift(); // Keep last 50

        // Save to localStorage
        localStorage.setItem('impulse-interval-stats', JSON.stringify(newStats));
        localStorage.setItem('impulse-interval-history', JSON.stringify(newHistory));

        // Show result message
        if (wasResisted === true) {
            alert('🏆 Excellent self-control! You successfully resisted the impulse.');
        } else if (wasResisted === false) {
            alert('💭 That\'s okay - awareness is the first step. Try again next time!');
        } else {
            alert('⏰ Time\'s up! The pause has given you space to make a conscious choice.');
        }

        // Reset state
        setState({
            impulse: '',
            timerActive: false,
            timeRemaining: 0,
            timerInterval: null,
            pauseDuration: 10,
            alternatives: [],
            chosenAlternative: null,
            stats: newStats,
            history: newHistory
        });
    },

    help() {
        return `
            <ul>
                <li>Describe any impulse you're feeling urged to act on</li>
                <li>Set a pause duration (5-30 minutes) to create space</li>
                <li>Review healthier alternatives during the pause</li>
                <li>Choose an alternative or extend the pause if needed</li>
                <li>At the end, decide consciously whether to proceed</li>
                <li>Track your impulse resistance rate over time</li>
                <li>Remember: The goal is conscious choice, not perfection</li>
            </ul>
        `;
    }
};