// Micro Break Oracle - Suggest perfect break activities based on your current state
export default {
    init() {
        return {
            workDuration: 0,
            isWorking: false,
            lastBreakTime: null,
            currentAssessment: null,
            suggestions: [],
            activeTimer: null,
            stats: JSON.parse(localStorage.getItem('micro-break-oracle-stats') || '{}'),
            settings: JSON.parse(localStorage.getItem('micro-break-oracle-settings') || JSON.stringify({
                maxWorkDuration: 50, // minutes
                preferredBreakTypes: ['stretch', 'meditate', 'look_distant', 'breathe', 'walk'],
                autoReminders: true
            })),
            history: JSON.parse(localStorage.getItem('micro-break-oracle-history') || '[]')
        };
    },

    render(container, state, setState) {
        const workMinutes = Math.floor(state.workDuration / 60);
        const workSeconds = state.workDuration % 60;

        container.innerHTML = `
            <div class="utility-workspace">
                <h2>🧘 Micro Break Oracle</h2>
                <p>Get personalized break suggestions based on your current state and work duration</p>

                <div class="card">
                    <h3>Work Timer</h3>
                    <div class="timer-display" style="text-align: center; margin: 20px 0;">
                        <div class="work-time" style="font-size: 2rem; font-weight: bold; color: ${state.isWorking ? 'var(--color-success-500)' : 'var(--color-neutral-500)'}">
                            ${workMinutes}:${workSeconds.toString().padStart(2, '0')}
                        </div>
                        <div style="margin: 10px 0;">
                            <button class="btn ${state.isWorking ? 'btn-secondary' : 'btn-primary'}" id="work-toggle">
                                ${state.isWorking ? '⏸️ Stop Working' : '▶️ Start Working'}
                            </button>
                            <button class="btn btn-ghost" id="reset-timer">🔄 Reset</button>
                        </div>
                        ${state.workDuration > 0 ? `
                            <div class="work-status">
                                Status: ${this.getWorkStatus(state.workDuration, state.settings)}
                                ${state.workDuration >= state.settings.maxWorkDuration * 60 ? `
                                    <div class="alert alert-warning" style="margin-top: 10px;">
                                        ⚠️ Time for a break!
                                    </div>
                                ` : ''}
                            </div>
                        ` : ''}
                    </div>
                </div>

                <div class="card">
                    <h3>Break Assessment</h3>
                    <p>Tell us how you're feeling for personalized break suggestions:</p>

                    <div class="assessment-options" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin: 20px 0;">
                        <div class="assessment-category">
                            <h4>Physical State</h4>
                            ${this.renderAssessmentButtons('physical', [
                                { id: 'tense', label: '😬 Tense/Stiff', description: 'Shoulders, neck, or back feel tight' },
                                { id: 'tired', label: '😴 Physically Tired', description: 'Body feels heavy or sluggish' },
                                { id: 'restless', label: '🏃 Restless', description: 'Need to move or stretch' },
                                { id: 'comfortable', label: '😌 Comfortable', description: 'Body feels fine' }
                            ], state.currentAssessment)}
                        </div>

                        <div class="assessment-category">
                            <h4>Mental State</h4>
                            ${this.renderAssessmentButtons('mental', [
                                { id: 'foggy', label: '🌫️ Mental Fog', description: 'Hard to think clearly' },
                                { id: 'stressed', label: '😰 Stressed', description: 'Feeling overwhelmed or anxious' },
                                { id: 'focused', label: '🎯 Focused', description: 'Mind is sharp and clear' },
                                { id: 'distracted', label: '🎭 Distracted', description: 'Mind is wandering' }
                            ], state.currentAssessment)}
                        </div>

                        <div class="assessment-category">
                            <h4>Eyes & Vision</h4>
                            ${this.renderAssessmentButtons('eyes', [
                                { id: 'strained', label: '👀 Eye Strain', description: 'Eyes feel tired or dry' },
                                { id: 'blurry', label: '😵 Blurry Vision', description: 'Vision feels unfocused' },
                                { id: 'headache', label: '🤕 Screen Headache', description: 'Head hurts from screen time' },
                                { id: 'fine', label: '✨ Eyes Feel Fine', description: 'No eye discomfort' }
                            ], state.currentAssessment)}
                        </div>
                    </div>

                    <button class="btn btn-primary" id="get-suggestions" ${!state.currentAssessment ? 'disabled' : ''}>
                        🔮 Get Break Suggestions
                    </button>
                </div>

                ${state.suggestions.length > 0 ? `
                    <div class="card">
                        <h3>🎯 Personalized Break Suggestions</h3>
                        <div class="suggestions-grid" style="display: grid; gap: 15px;">
                            ${state.suggestions.map((suggestion, index) => `
                                <div class="suggestion-card" style="padding: 20px; background: var(--color-neutral-50); border: 2px solid var(--color-primary-200); border-radius: 12px; position: relative;">
                                    <div class="suggestion-header" style="display: flex; justify-content: between; align-items: center; margin-bottom: 10px;">
                                        <h4 style="margin: 0; color: var(--color-primary-600);">${suggestion.icon} ${suggestion.title}</h4>
                                        <span class="duration-badge" style="background: var(--color-primary-100); padding: 4px 8px; border-radius: 16px; font-size: 0.8rem;">
                                            ${suggestion.duration}
                                        </span>
                                    </div>
                                    <p style="margin: 10px 0; color: var(--color-neutral-700);">${suggestion.description}</p>
                                    <div class="suggestion-steps">
                                        <strong>How to do it:</strong>
                                        <ol style="margin: 5px 0; padding-left: 20px;">
                                            ${suggestion.steps.map(step => `<li style="margin: 2px 0;">${step}</li>`).join('')}
                                        </ol>
                                    </div>
                                    <div class="suggestion-benefits" style="margin-top: 10px; padding: 10px; background: var(--color-success-50); border-radius: 8px;">
                                        <strong style="color: var(--color-success-700);">✨ Benefits:</strong>
                                        <div style="color: var(--color-success-600); font-size: 0.9rem;">${suggestion.benefits}</div>
                                    </div>
                                    <button class="btn btn-sm btn-primary start-break-btn" data-suggestion="${index}" style="margin-top: 15px;">
                                        🎬 Start This Break
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <div class="card">
                    <h3>📊 Break Statistics</h3>
                    <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin: 20px 0;">
                        <div class="stat-item" style="text-align: center; padding: 15px; background: var(--color-neutral-50); border-radius: 8px;">
                            <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary-600);">${state.stats.totalBreaks || 0}</div>
                            <div style="font-size: 0.9rem; color: var(--color-neutral-600);">Total Breaks</div>
                        </div>
                        <div class="stat-item" style="text-align: center; padding: 15px; background: var(--color-neutral-50); border-radius: 8px;">
                            <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-success-600);">${Math.round((state.stats.totalBreakTime || 0) / 60)}m</div>
                            <div style="font-size: 0.9rem; color: var(--color-neutral-600);">Break Time</div>
                        </div>
                        <div class="stat-item" style="text-align: center; padding: 15px; background: var(--color-neutral-50); border-radius: 8px;">
                            <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-warning-600);">${Math.round((state.stats.totalWorkTime || 0) / 60)}m</div>
                            <div style="font-size: 0.9rem; color: var(--color-neutral-600);">Work Time</div>
                        </div>
                        <div class="stat-item" style="text-align: center; padding: 15px; background: var(--color-neutral-50); border-radius: 8px;">
                            <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-info-600);">${state.stats.favoriteBreakType || 'None'}</div>
                            <div style="font-size: 0.9rem; color: var(--color-neutral-600);">Favorite Break</div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3>📝 Recent Break History</h3>
                    ${state.history.length === 0 ? `
                        <p style="color: var(--color-neutral-500);">No breaks taken yet. Start working and take your first micro-break!</p>
                    ` : `
                        <div class="history-list">
                            ${state.history.slice(-8).reverse().map(item => `
                                <div class="history-item" style="padding: 12px; border-left: 4px solid var(--color-primary-200); background: var(--color-neutral-50); margin: 8px 0; border-radius: 0 8px 8px 0;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                                        <strong style="color: var(--color-primary-600);">${item.breakType} ${item.icon || ''}</strong>
                                        <small style="color: var(--color-neutral-500);">${new Date(item.timestamp).toLocaleString()}</small>
                                    </div>
                                    <div style="font-size: 0.9rem; color: var(--color-neutral-600);">Duration: ${item.duration} | Work time before: ${Math.round(item.workTimeBefore / 60)}m</div>
                                    ${item.effectiveness ? `<div style="font-size: 0.8rem; color: var(--color-success-600); margin-top: 5px;">Effectiveness: ${'⭐'.repeat(item.effectiveness)}</div>` : ''}
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
        // Work timer controls
        const workToggle = container.querySelector('#work-toggle');
        const resetTimer = container.querySelector('#reset-timer');
        const getSuggestions = container.querySelector('#get-suggestions');

        if (workToggle) {
            workToggle.addEventListener('click', () => {
                if (state.isWorking) {
                    this.stopWorking(state, setState);
                } else {
                    this.startWorking(state, setState);
                }
            });
        }

        if (resetTimer) {
            resetTimer.addEventListener('click', () => {
                this.resetTimer(state, setState);
            });
        }

        // Assessment buttons
        container.querySelectorAll('.assessment-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.category;
                const value = btn.dataset.value;

                const newAssessment = { ...state.currentAssessment } || {};
                newAssessment[category] = value;

                setState({ currentAssessment: newAssessment });
            });
        });

        if (getSuggestions) {
            getSuggestions.addEventListener('click', () => {
                const suggestions = this.generateSuggestions(state.currentAssessment, state.workDuration);
                setState({ suggestions });
            });
        }

        // Start break buttons
        container.querySelectorAll('.start-break-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const suggestionIndex = parseInt(btn.dataset.suggestion);
                this.startBreak(state, setState, state.suggestions[suggestionIndex]);
            });
        });
    },

    startWorking(state, setState) {
        const interval = setInterval(() => {
            setState(prevState => ({
                workDuration: prevState.workDuration + 1
            }));
        }, 1000);

        setState({
            isWorking: true,
            activeTimer: interval
        });
    },

    stopWorking(state, setState) {
        if (state.activeTimer) {
            clearInterval(state.activeTimer);
        }

        // Update work time stats
        const newStats = { ...state.stats };
        newStats.totalWorkTime = (newStats.totalWorkTime || 0) + state.workDuration;
        localStorage.setItem('micro-break-oracle-stats', JSON.stringify(newStats));

        setState({
            isWorking: false,
            activeTimer: null,
            stats: newStats
        });
    },

    resetTimer(state, setState) {
        if (state.activeTimer) {
            clearInterval(state.activeTimer);
        }

        setState({
            workDuration: 0,
            isWorking: false,
            activeTimer: null
        });
    },

    getWorkStatus(workDuration, settings) {
        const minutes = Math.floor(workDuration / 60);
        if (minutes < 20) return '🟢 Fresh and focused';
        if (minutes < 35) return '🟡 Maintaining focus';
        if (minutes < settings.maxWorkDuration) return '🟠 Focus may be declining';
        return '🔴 Break time!';
    },

    renderAssessmentButtons(category, options, currentAssessment) {
        return options.map(option => {
            const isSelected = currentAssessment && currentAssessment[category] === option.id;
            return `
                <button class="btn btn-sm assessment-btn ${isSelected ? 'btn-primary' : 'btn-ghost'}"
                        data-category="${category}"
                        data-value="${option.id}"
                        style="margin: 2px; text-align: left; width: 100%; justify-content: flex-start;">
                    <div>
                        <div style="font-weight: bold;">${option.label}</div>
                        <div style="font-size: 0.8rem; opacity: 0.8;">${option.description}</div>
                    </div>
                </button>
            `;
        }).join('');
    },

    generateSuggestions(assessment, workDuration) {
        const suggestions = [];
        const breakDuration = this.calculateOptimalBreakDuration(workDuration);

        // Physical suggestions
        if (assessment.physical === 'tense' || assessment.physical === 'restless') {
            suggestions.push({
                icon: '🧘‍♂️',
                title: 'Desk Stretches',
                duration: `${Math.max(2, breakDuration)} minutes`,
                description: 'Release tension with targeted stretches for desk workers',
                steps: [
                    'Neck rolls: 5 slow circles each direction',
                    'Shoulder shrugs: 10 repetitions',
                    'Seated spinal twist: Hold 15 seconds each side',
                    'Wrist and ankle circles: 10 each direction'
                ],
                benefits: 'Reduces muscle tension, improves circulation, prevents stiffness',
                type: 'stretch'
            });
        }

        if (assessment.physical === 'tired') {
            suggestions.push({
                icon: '🚶‍♂️',
                title: 'Energizing Walk',
                duration: `${breakDuration} minutes`,
                description: 'A brief walk to boost energy and circulation',
                steps: [
                    'Stand up and take 10 deep breaths',
                    'Walk around your workspace or outside',
                    'Focus on your surroundings, not work',
                    'Take deeper breaths as you walk'
                ],
                benefits: 'Increases alertness, boosts mood, improves circulation',
                type: 'movement'
            });
        }

        // Mental suggestions
        if (assessment.mental === 'foggy' || assessment.mental === 'distracted') {
            suggestions.push({
                icon: '🧠',
                title: 'Mindfulness Meditation',
                duration: `${breakDuration} minutes`,
                description: 'Clear mental fog with focused breathing',
                steps: [
                    'Sit comfortably with eyes closed',
                    'Focus on your breathing rhythm',
                    'Count breaths from 1 to 10, then repeat',
                    'When mind wanders, gently return to breathing'
                ],
                benefits: 'Improves focus, reduces mental clutter, increases clarity',
                type: 'meditate'
            });
        }

        if (assessment.mental === 'stressed') {
            suggestions.push({
                icon: '🌬️',
                title: 'Stress-Relief Breathing',
                duration: `${Math.max(3, breakDuration)} minutes`,
                description: 'Calm your nervous system with deep breathing',
                steps: [
                    'Inhale slowly for 4 counts',
                    'Hold breath for 4 counts',
                    'Exhale slowly for 6 counts',
                    'Repeat this pattern 8-10 times'
                ],
                benefits: 'Activates relaxation response, reduces stress hormones',
                type: 'breathe'
            });
        }

        // Eye suggestions
        if (assessment.eyes === 'strained' || assessment.eyes === 'blurry') {
            suggestions.push({
                icon: '👁️',
                title: 'Eye Rest & Distance Gazing',
                duration: `${breakDuration} minutes`,
                description: 'Give your eyes a break from screen strain',
                steps: [
                    'Look away from all screens',
                    'Focus on something 20+ feet away for 20 seconds',
                    'Blink slowly and deliberately 20 times',
                    'Close eyes and rest for 30 seconds',
                    'Repeat the cycle'
                ],
                benefits: 'Reduces eye strain, prevents dry eyes, improves focus',
                type: 'look_distant'
            });
        }

        // Always include a hydration suggestion
        suggestions.push({
            icon: '💧',
            title: 'Hydration & Posture Check',
            duration: `${Math.min(2, breakDuration)} minutes`,
            description: 'Stay hydrated and improve your posture',
            steps: [
                'Drink a full glass of water slowly',
                'Check your sitting posture',
                'Adjust your chair and monitor height',
                'Roll shoulders back and straighten spine'
            ],
            benefits: 'Prevents dehydration, improves posture, boosts energy',
            type: 'hydrate'
        });

        return suggestions.slice(0, 3); // Return top 3 suggestions
    },

    calculateOptimalBreakDuration(workDuration) {
        const minutes = Math.floor(workDuration / 60);
        if (minutes < 20) return 2;
        if (minutes < 40) return 3;
        if (minutes < 60) return 4;
        return 5;
    },

    startBreak(state, setState, suggestion) {
        // Stop work timer if running
        if (state.activeTimer) {
            clearInterval(state.activeTimer);
        }

        // Record the break
        const breakRecord = {
            breakType: suggestion.title,
            icon: suggestion.icon,
            duration: suggestion.duration,
            workTimeBefore: state.workDuration,
            timestamp: Date.now(),
            assessment: state.currentAssessment
        };

        const newHistory = [...state.history, breakRecord];
        if (newHistory.length > 50) newHistory.shift();

        // Update stats
        const newStats = { ...state.stats };
        newStats.totalBreaks = (newStats.totalBreaks || 0) + 1;
        newStats.totalBreakTime = (newStats.totalBreakTime || 0) + (parseInt(suggestion.duration) * 60);
        newStats.totalWorkTime = (newStats.totalWorkTime || 0) + state.workDuration;

        // Track favorite break type
        const breakTypeCounts = newStats.breakTypeCounts || {};
        breakTypeCounts[suggestion.type] = (breakTypeCounts[suggestion.type] || 0) + 1;
        newStats.breakTypeCounts = breakTypeCounts;

        // Find most common break type
        let maxCount = 0;
        let favoriteType = 'None';
        Object.entries(breakTypeCounts).forEach(([type, count]) => {
            if (count > maxCount) {
                maxCount = count;
                favoriteType = type;
            }
        });
        newStats.favoriteBreakType = favoriteType;

        // Save data
        localStorage.setItem('micro-break-oracle-history', JSON.stringify(newHistory));
        localStorage.setItem('micro-break-oracle-stats', JSON.stringify(newStats));

        // Update state
        setState({
            workDuration: 0,
            isWorking: false,
            activeTimer: null,
            currentAssessment: null,
            suggestions: [],
            history: newHistory,
            stats: newStats,
            lastBreakTime: Date.now()
        });

        // Show success message
        if (window.showToast) {
            window.showToast(`Break started: ${suggestion.title}! Take ${suggestion.duration} to recharge.`, 'success');
        }
    },

    help() {
        return `
            <div class="help-content">
                <h3>🧘 How to Use Micro Break Oracle</h3>
                <div class="help-section">
                    <h4>📊 Work Timer</h4>
                    <ul>
                        <li><strong>Start Working:</strong> Click the play button to begin tracking your work time</li>
                        <li><strong>Stop Working:</strong> Pause the timer when you're done or ready for a break</li>
                        <li><strong>Reset Timer:</strong> Clear the current work session time</li>
                        <li><strong>Auto Alerts:</strong> Get notified when you've worked for too long</li>
                    </ul>
                </div>

                <div class="help-section">
                    <h4>🎯 Break Assessment</h4>
                    <ul>
                        <li><strong>Physical State:</strong> How does your body feel? Tense, tired, restless, or comfortable?</li>
                        <li><strong>Mental State:</strong> What's your mental condition? Foggy, stressed, focused, or distracted?</li>
                        <li><strong>Eyes & Vision:</strong> Are your eyes strained, blurry, causing headaches, or fine?</li>
                        <li><strong>Get Suggestions:</strong> Receive personalized break recommendations based on your assessment</li>
                    </ul>
                </div>

                <div class="help-section">
                    <h4>🎬 Break Activities</h4>
                    <ul>
                        <li><strong>Desk Stretches:</strong> For physical tension and stiffness</li>
                        <li><strong>Mindfulness:</strong> For mental fog and distractions</li>
                        <li><strong>Eye Exercises:</strong> For screen strain and blurry vision</li>
                        <li><strong>Walking:</strong> For physical tiredness and energy</li>
                        <li><strong>Breathing:</strong> For stress relief and anxiety</li>
                    </ul>
                </div>

                <div class="help-section">
                    <h4>📈 Tips for Best Results</h4>
                    <ul>
                        <li>Take breaks every 25-50 minutes of focused work</li>
                        <li>Be honest in your assessment for better suggestions</li>
                        <li>Try different break types to find what works best for you</li>
                        <li>Use the statistics to track your break patterns and productivity</li>
                        <li>Set up your workspace to support regular break-taking</li>
                    </ul>
                </div>
            </div>
        `;
    }
};
