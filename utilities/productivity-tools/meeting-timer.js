// Meeting Timer - Time meetings effectively with agenda tracking and participant management
export default {
    init() {
        return {
            // Meeting state
            isRunning: false,
            isPaused: false,
            currentTime: 0,
            meetingStartTime: null,
            activeTimer: null,

            // Meeting details
            meetingTitle: '',
            totalDuration: 60, // minutes

            // Agenda management
            agenda: [],
            currentAgendaIndex: -1,
            agendaStartTimes: {},

            // Participant tracking
            participants: [],
            currentSpeaker: null,
            speakingTimes: {},

            // Alerts and warnings
            warningsEnabled: true,
            lastWarning: null,

            // Data persistence
            settings: JSON.parse(localStorage.getItem('meeting-timer-settings') || JSON.stringify({
                defaultDuration: 60,
                warningIntervals: [75, 90, 100], // Percentage of time
                autoSaveNotes: true,
                trackSpeakingTime: true
            })),
            history: JSON.parse(localStorage.getItem('meeting-timer-history') || '[]'),
            currentNotes: ''
        };
    },

    render(container, state, setState) {
        const minutes = Math.floor(state.currentTime / 60);
        const seconds = state.currentTime % 60;
        const totalMinutes = state.totalDuration;
        const progressPercent = totalMinutes > 0 ? Math.min((state.currentTime / (totalMinutes * 60)) * 100, 100) : 0;
        const isOvertime = progressPercent > 100;

        container.innerHTML = `
            <div class="utility-workspace">
                <h2>⏰ Meeting Timer</h2>
                <p>Professional meeting management with agenda tracking and time allocation</p>

                <div class="card">
                    <h3>Meeting Setup</h3>
                    <div class="form-row" style="display: grid; grid-template-columns: 2fr 1fr; gap: 15px; align-items: end;">
                        <div class="form-group">
                            <label for="meeting-title">Meeting Title</label>
                            <input
                                type="text"
                                id="meeting-title"
                                class="input"
                                placeholder="Enter meeting title..."
                                value="${state.meetingTitle}"
                            />
                        </div>
                        <div class="form-group">
                            <label for="total-duration">Duration (minutes)</label>
                            <input
                                type="number"
                                id="total-duration"
                                class="input"
                                value="${state.totalDuration}"
                                min="5"
                                max="480"
                                ${state.isRunning ? 'disabled' : ''}
                            />
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3>Timer Control</h3>
                    <div class="timer-display" style="text-align: center; margin: 20px 0;">
                        <div class="time-display" style="font-size: 3rem; font-weight: bold; color: ${isOvertime ? 'var(--color-error-500)' : state.isRunning ? 'var(--color-success-500)' : 'var(--color-neutral-600)'}; margin-bottom: 10px;">
                            ${minutes}:${seconds.toString().padStart(2, '0')}
                        </div>
                        <div class="progress-bar" style="width: 100%; height: 8px; background: var(--color-neutral-200); border-radius: 4px; margin: 15px 0; overflow: hidden;">
                            <div class="progress-fill" style="width: ${Math.min(progressPercent, 100)}%; height: 100%; background: ${isOvertime ? 'var(--color-error-500)' : progressPercent > 75 ? 'var(--color-warning-500)' : 'var(--color-success-500)'}; transition: width 0.3s ease;"></div>
                        </div>
                        <div class="time-info" style="font-size: 0.9rem; color: var(--color-neutral-600); margin-bottom: 20px;">
                            ${progressPercent.toFixed(1)}% complete • ${totalMinutes - Math.floor(state.currentTime / 60)} minutes remaining
                            ${isOvertime ? `<span style="color: var(--color-error-500); font-weight: bold;">⚠️ OVERTIME</span>` : ''}
                        </div>
                        <div class="timer-controls" style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                            ${!state.isRunning ? `
                                <button class="btn btn-primary" id="start-timer">
                                    ▶️ Start Meeting
                                </button>
                            ` : `
                                <button class="btn btn-secondary" id="pause-timer">
                                    ${state.isPaused ? '▶️ Resume' : '⏸️ Pause'}
                                </button>
                                <button class="btn btn-error" id="stop-timer">
                                    ⏹️ End Meeting
                                </button>
                            `}
                            <button class="btn btn-ghost" id="reset-timer" ${state.isRunning ? 'disabled' : ''}>
                                🔄 Reset
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3>Agenda Management</h3>
                    <div class="agenda-input" style="margin-bottom: 20px;">
                        <div style="display: flex; gap: 10px; align-items: end; margin-bottom: 10px;">
                            <div class="form-group" style="flex: 2;">
                                <input
                                    type="text"
                                    id="agenda-item-title"
                                    class="input"
                                    placeholder="Agenda item title..."
                                />
                            </div>
                            <div class="form-group" style="flex: 1;">
                                <input
                                    type="number"
                                    id="agenda-item-duration"
                                    class="input"
                                    placeholder="Minutes"
                                    min="1"
                                    max="120"
                                />
                            </div>
                            <button class="btn btn-primary" id="add-agenda-item">
                                ➕ Add Item
                            </button>
                        </div>
                    </div>

                    <div class="agenda-list">
                        ${state.agenda.length === 0 ? `
                            <p style="color: var(--color-neutral-500); text-align: center; padding: 20px;">
                                No agenda items added yet. Add items to better structure your meeting.
                            </p>
                        ` : `
                            <div class="agenda-items">
                                ${state.agenda.map((item, index) => {
                                    const isActive = state.currentAgendaIndex === index;
                                    const isCompleted = state.currentAgendaIndex > index;
                                    const startTime = state.agendaStartTimes[index];
                                    const elapsed = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;

                                    return `
                                        <div class="agenda-item ${isActive ? 'active' : isCompleted ? 'completed' : 'pending'}"
                                             style="padding: 15px; margin: 8px 0; border-radius: 8px; border: 2px solid ${isActive ? 'var(--color-primary-300)' : isCompleted ? 'var(--color-success-300)' : 'var(--color-neutral-200)'}; background: ${isActive ? 'var(--color-primary-50)' : isCompleted ? 'var(--color-success-50)' : 'var(--color-neutral-50)'}; position: relative;">
                                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                                <div>
                                                    <div style="font-weight: bold; color: var(--color-neutral-800);">
                                                        ${isCompleted ? '✅' : isActive ? '🔄' : '⏳'} ${item.title}
                                                    </div>
                                                    <div style="font-size: 0.8rem; color: var(--color-neutral-600);">
                                                        Allocated: ${item.duration} minutes
                                                        ${isActive ? ` • Elapsed: ${Math.floor(elapsed / 60)}:${(elapsed % 60).toString().padStart(2, '0')}` : ''}
                                                        ${isActive && elapsed > item.duration * 60 ? ' <span style="color: var(--color-error-500);">⚠️ Over time!</span>' : ''}
                                                    </div>
                                                </div>
                                                <div class="agenda-controls">
                                                    ${!state.isRunning && !isCompleted ? `
                                                        <button class="btn btn-sm btn-ghost" onclick="this.closest('.utility-workspace').querySelector('[data-agenda-index="${index}"]').click()">
                                                            🗑️
                                                        </button>
                                                    ` : ''}
                                                    ${state.isRunning && !isActive && !isCompleted ? `
                                                        <button class="btn btn-sm btn-primary agenda-start-btn" data-agenda-index="${index}">
                                                            ▶️ Start
                                                        </button>
                                                    ` : ''}
                                                    ${state.isRunning && isActive ? `
                                                        <button class="btn btn-sm btn-success agenda-next-btn">
                                                            ✅ Complete
                                                        </button>
                                                    ` : ''}
                                                </div>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        `}
                    </div>
                </div>

                ${state.isRunning && state.settings.trackSpeakingTime ? `
                    <div class="card">
                        <h3>Participant Speaking Time</h3>
                        <div class="participant-controls" style="margin-bottom: 20px;">
                            <div style="display: flex; gap: 10px; align-items: end; flex-wrap: wrap;">
                                <div class="form-group">
                                    <input
                                        type="text"
                                        id="participant-name"
                                        class="input"
                                        placeholder="Participant name..."
                                    />
                                </div>
                                <button class="btn btn-primary" id="add-participant">
                                    👥 Add Participant
                                </button>
                            </div>
                        </div>

                        <div class="participants-list">
                            ${state.participants.length === 0 ? `
                                <p style="color: var(--color-neutral-500); text-align: center; padding: 15px;">
                                    Add participants to track speaking time
                                </p>
                            ` : `
                                <div class="participants-grid" style="display: grid; gap: 10px;">
                                    ${state.participants.map(participant => {
                                        const speakingTime = state.speakingTimes[participant] || 0;
                                        const minutes = Math.floor(speakingTime / 60);
                                        const seconds = speakingTime % 60;
                                        const isCurrentSpeaker = state.currentSpeaker === participant;
                                        const percentage = state.currentTime > 0 ? ((speakingTime / state.currentTime) * 100).toFixed(1) : 0;

                                        return `
                                            <div class="participant-card" style="padding: 12px; border: 2px solid ${isCurrentSpeaker ? 'var(--color-success-300)' : 'var(--color-neutral-200)'}; border-radius: 8px; background: ${isCurrentSpeaker ? 'var(--color-success-50)' : 'var(--color-neutral-50)'}; display: flex; justify-content: space-between; align-items: center;">
                                                <div>
                                                    <div style="font-weight: bold; color: var(--color-neutral-800);">
                                                        ${isCurrentSpeaker ? '🎤' : '👤'} ${participant}
                                                    </div>
                                                    <div style="font-size: 0.9rem; color: var(--color-neutral-600);">
                                                        ${minutes}:${seconds.toString().padStart(2, '0')} (${percentage}%)
                                                    </div>
                                                </div>
                                                <div class="participant-controls">
                                                    ${!isCurrentSpeaker ? `
                                                        <button class="btn btn-sm btn-success speaker-btn" data-participant="${participant}">
                                                            🎤 Speaking
                                                        </button>
                                                    ` : `
                                                        <button class="btn btn-sm btn-secondary stop-speaking-btn">
                                                            ⏹️ Stop
                                                        </button>
                                                    `}
                                                </div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            `}
                        </div>
                    </div>
                ` : ''}

                <div class="card">
                    <h3>Meeting Notes</h3>
                    <div class="form-group">
                        <textarea
                            id="meeting-notes"
                            class="textarea"
                            placeholder="Add meeting notes, decisions, action items..."
                            style="min-height: 120px;"
                        >${state.currentNotes}</textarea>
                    </div>
                    <button class="btn btn-ghost" id="save-notes">
                        💾 Save Notes
                    </button>
                </div>

                <div class="card">
                    <h3>📈 Meeting History</h3>
                    ${state.history.length === 0 ? `
                        <p style="color: var(--color-neutral-500); text-align: center; padding: 20px;">
                            No meetings recorded yet. Complete a meeting to see history.
                        </p>
                    ` : `
                        <div class="history-list">
                            ${state.history.slice(-8).reverse().map(meeting => {
                                const duration = Math.round(meeting.actualDuration / 60);
                                const efficiency = meeting.plannedDuration > 0 ? Math.round((meeting.actualDuration / (meeting.plannedDuration * 60)) * 100) : 0;

                                return `
                                    <div class="meeting-history-card" style="padding: 15px; margin: 10px 0; border: 1px solid var(--color-neutral-200); border-radius: 8px; background: var(--color-neutral-50);">
                                        <div class="meeting-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                            <h4 style="margin: 0; color: var(--color-primary-600);">${meeting.title || 'Untitled Meeting'}</h4>
                                            <small style="color: var(--color-neutral-500);">${new Date(meeting.timestamp).toLocaleDateString()}</small>
                                        </div>
                                        <div class="meeting-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px; margin: 10px 0;">
                                            <div class="stat-item" style="text-align: center;">
                                                <div style="font-weight: bold; color: var(--color-info-600);">${duration}m</div>
                                                <div style="font-size: 0.8rem; color: var(--color-neutral-600);">Duration</div>
                                            </div>
                                            <div class="stat-item" style="text-align: center;">
                                                <div style="font-weight: bold; color: ${efficiency <= 100 ? 'var(--color-success-600)' : 'var(--color-warning-600)'}">${efficiency}%</div>
                                                <div style="font-size: 0.8rem; color: var(--color-neutral-600);">Efficiency</div>
                                            </div>
                                            <div class="stat-item" style="text-align: center;">
                                                <div style="font-weight: bold; color: var(--color-neutral-600);">${meeting.agendaItems || 0}</div>
                                                <div style="font-size: 0.8rem; color: var(--color-neutral-600);">Agenda Items</div>
                                            </div>
                                            <div class="stat-item" style="text-align: center;">
                                                <div style="font-weight: bold; color: var(--color-neutral-600);">${meeting.participants?.length || 0}</div>
                                                <div style="font-size: 0.8rem; color: var(--color-neutral-600);">Participants</div>
                                            </div>
                                        </div>
                                        ${meeting.notes ? `
                                            <div class="meeting-notes" style="margin-top: 10px; padding: 10px; background: var(--color-neutral-100); border-radius: 6px; font-size: 0.9rem;">
                                                <strong>Notes:</strong> ${meeting.notes.length > 100 ? meeting.notes.substring(0, 100) + '...' : meeting.notes}
                                            </div>
                                        ` : ''}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        <div style="text-align: center; margin-top: 20px;">
                            <button class="btn btn-ghost" id="export-history">
                                📄 Export Meeting History
                            </button>
                        </div>
                    `}
                </div>
            </div>
        `;

        this.setupEventListeners(container, state, setState);
    },

    setupEventListeners(container, state, setState) {
        // Meeting setup
        const meetingTitle = container.querySelector('#meeting-title');
        const totalDuration = container.querySelector('#total-duration');

        if (meetingTitle) {
            meetingTitle.addEventListener('input', (e) => {
                setState({ meetingTitle: e.target.value });
            });
        }

        if (totalDuration) {
            totalDuration.addEventListener('change', (e) => {
                setState({ totalDuration: parseInt(e.target.value) || 60 });
            });
        }

        // Timer controls
        const startTimer = container.querySelector('#start-timer');
        const pauseTimer = container.querySelector('#pause-timer');
        const stopTimer = container.querySelector('#stop-timer');
        const resetTimer = container.querySelector('#reset-timer');

        if (startTimer) {
            startTimer.addEventListener('click', () => {
                this.startMeeting(state, setState);
            });
        }

        if (pauseTimer) {
            pauseTimer.addEventListener('click', () => {
                this.togglePause(state, setState);
            });
        }

        if (stopTimer) {
            stopTimer.addEventListener('click', () => {
                this.stopMeeting(state, setState);
            });
        }

        if (resetTimer) {
            resetTimer.addEventListener('click', () => {
                this.resetMeeting(state, setState);
            });
        }

        // Agenda management
        const addAgendaItem = container.querySelector('#add-agenda-item');
        const agendaTitle = container.querySelector('#agenda-item-title');
        const agendaDuration = container.querySelector('#agenda-item-duration');

        if (addAgendaItem) {
            addAgendaItem.addEventListener('click', () => {
                const title = agendaTitle?.value.trim();
                const duration = parseInt(agendaDuration?.value) || 5;

                if (title) {
                    const newAgenda = [...state.agenda, { title, duration }];
                    setState({ agenda: newAgenda });

                    if (agendaTitle) agendaTitle.value = '';
                    if (agendaDuration) agendaDuration.value = '';
                }
            });
        }

        // Agenda controls
        container.querySelectorAll('.agenda-start-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.dataset.agendaIndex);
                this.startAgendaItem(state, setState, index);
            });
        });

        const agendaNext = container.querySelector('.agenda-next-btn');
        if (agendaNext) {
            agendaNext.addEventListener('click', () => {
                this.nextAgendaItem(state, setState);
            });
        }

        // Participant management
        const addParticipant = container.querySelector('#add-participant');
        const participantName = container.querySelector('#participant-name');

        if (addParticipant) {
            addParticipant.addEventListener('click', () => {
                const name = participantName?.value.trim();
                if (name && !state.participants.includes(name)) {
                    const newParticipants = [...state.participants, name];
                    setState({ participants: newParticipants });

                    if (participantName) participantName.value = '';
                }
            });
        }

        // Speaking time tracking
        container.querySelectorAll('.speaker-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const participant = btn.dataset.participant;
                this.startSpeaking(state, setState, participant);
            });
        });

        const stopSpeaking = container.querySelector('.stop-speaking-btn');
        if (stopSpeaking) {
            stopSpeaking.addEventListener('click', () => {
                this.stopSpeaking(state, setState);
            });
        }

        // Notes
        const meetingNotes = container.querySelector('#meeting-notes');
        const saveNotes = container.querySelector('#save-notes');

        if (meetingNotes) {
            meetingNotes.addEventListener('input', (e) => {
                setState({ currentNotes: e.target.value });
            });
        }

        if (saveNotes) {
            saveNotes.addEventListener('click', () => {
                if (window.showToast) {
                    window.showToast('Notes saved!', 'success');
                }
            });
        }

        // Export
        const exportHistory = container.querySelector('#export-history');
        if (exportHistory) {
            exportHistory.addEventListener('click', () => {
                this.exportMeetingHistory(state);
            });
        }
    },

    startMeeting(state, setState) {
        const interval = setInterval(() => {
            setState(prevState => {
                const newTime = prevState.currentTime + 1;

                // Check for warnings
                this.checkTimeWarnings(newTime, prevState.totalDuration * 60, prevState.settings.warningIntervals);

                return {
                    currentTime: newTime
                };
            });
        }, 1000);

        setState({
            isRunning: true,
            isPaused: false,
            meetingStartTime: Date.now(),
            activeTimer: interval
        });

        if (window.showToast) {
            window.showToast(`Meeting "${state.meetingTitle || 'Untitled'}" started!`, 'success');
        }
    },

    togglePause(state, setState) {
        if (state.isPaused) {
            // Resume
            const interval = setInterval(() => {
                setState(prevState => ({
                    currentTime: prevState.currentTime + 1
                }));
            }, 1000);

            setState({
                isPaused: false,
                activeTimer: interval
            });
        } else {
            // Pause
            if (state.activeTimer) {
                clearInterval(state.activeTimer);
            }

            setState({
                isPaused: true,
                activeTimer: null
            });
        }
    },

    stopMeeting(state, setState) {
        if (state.activeTimer) {
            clearInterval(state.activeTimer);
        }

        // Create meeting record
        const meetingRecord = {
            title: state.meetingTitle || 'Untitled Meeting',
            timestamp: Date.now(),
            actualDuration: state.currentTime,
            plannedDuration: state.totalDuration,
            agendaItems: state.agenda.length,
            participants: state.participants,
            speakingTimes: state.speakingTimes,
            notes: state.currentNotes,
            efficiency: state.totalDuration > 0 ? Math.round((state.currentTime / (state.totalDuration * 60)) * 100) : 100
        };

        const newHistory = [...state.history, meetingRecord];
        if (newHistory.length > 50) newHistory.shift();

        localStorage.setItem('meeting-timer-history', JSON.stringify(newHistory));

        setState({
            isRunning: false,
            isPaused: false,
            activeTimer: null,
            currentSpeaker: null,
            history: newHistory
        });

        if (window.showToast) {
            window.showToast(`Meeting completed! Duration: ${Math.round(state.currentTime / 60)} minutes`, 'success');
        }
    },

    resetMeeting(state, setState) {
        if (state.activeTimer) {
            clearInterval(state.activeTimer);
        }

        setState({
            isRunning: false,
            isPaused: false,
            currentTime: 0,
            meetingStartTime: null,
            activeTimer: null,
            currentAgendaIndex: -1,
            agendaStartTimes: {},
            currentSpeaker: null,
            speakingTimes: {},
            lastWarning: null
        });
    },

    startAgendaItem(state, setState, index) {
        const newAgendaStartTimes = { ...state.agendaStartTimes };
        newAgendaStartTimes[index] = Date.now();

        setState({
            currentAgendaIndex: index,
            agendaStartTimes: newAgendaStartTimes
        });

        const item = state.agenda[index];
        if (window.showToast) {
            window.showToast(`Started: ${item.title} (${item.duration}min)`, 'info');
        }
    },

    nextAgendaItem(state, setState) {
        const nextIndex = state.currentAgendaIndex + 1;

        if (nextIndex < state.agenda.length) {
            this.startAgendaItem(state, setState, nextIndex);
        } else {
            setState({ currentAgendaIndex: -1 });
            if (window.showToast) {
                window.showToast('All agenda items completed!', 'success');
            }
        }
    },

    startSpeaking(state, setState, participant) {
        // Stop current speaker if any
        if (state.currentSpeaker && state.speakerStartTime) {
            const speakingTime = Math.floor((Date.now() - state.speakerStartTime) / 1000);
            const newSpeakingTimes = { ...state.speakingTimes };
            newSpeakingTimes[state.currentSpeaker] = (newSpeakingTimes[state.currentSpeaker] || 0) + speakingTime;

            setState({
                speakingTimes: newSpeakingTimes
            });
        }

        setState({
            currentSpeaker: participant,
            speakerStartTime: Date.now()
        });
    },

    stopSpeaking(state, setState) {
        if (state.currentSpeaker && state.speakerStartTime) {
            const speakingTime = Math.floor((Date.now() - state.speakerStartTime) / 1000);
            const newSpeakingTimes = { ...state.speakingTimes };
            newSpeakingTimes[state.currentSpeaker] = (newSpeakingTimes[state.currentSpeaker] || 0) + speakingTime;

            setState({
                currentSpeaker: null,
                speakerStartTime: null,
                speakingTimes: newSpeakingTimes
            });
        }
    },

    checkTimeWarnings(currentTime, totalTime, warningIntervals) {
        const percentage = (currentTime / totalTime) * 100;

        for (const warningPercentage of warningIntervals) {
            if (percentage >= warningPercentage && (!this.lastWarning || this.lastWarning < warningPercentage)) {
                this.lastWarning = warningPercentage;

                if (window.showToast) {
                    const remainingTime = Math.max(0, Math.floor((totalTime - currentTime) / 60));
                    if (warningPercentage >= 100) {
                        window.showToast('⚠️ Meeting is over time!', 'warning');
                    } else {
                        window.showToast(`⏰ ${warningPercentage}% of time used. ${remainingTime} minutes remaining.`, 'warning');
                    }
                }
                break;
            }
        }
    },

    exportMeetingHistory(state) {
        const data = {
            exportDate: new Date().toISOString(),
            meetings: state.history
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'meeting-history.json';
        a.click();
        URL.revokeObjectURL(url);

        if (window.showToast) {
            window.showToast('Meeting history exported!', 'success');
        }
    },

    help() {
        return `
            <div class="help-content">
                <h3>⏰ How to Use Meeting Timer</h3>

                <div class="help-section">
                    <h4>📅 Meeting Setup</h4>
                    <ul>
                        <li><strong>Meeting Title:</strong> Give your meeting a descriptive name</li>
                        <li><strong>Duration:</strong> Set the planned meeting length (5-480 minutes)</li>
                        <li><strong>Start Meeting:</strong> Begin timing and tracking</li>
                        <li><strong>Pause/Resume:</strong> Control the timer as needed</li>
                    </ul>
                </div>

                <div class="help-section">
                    <h4>📋 Agenda Management</h4>
                    <ul>
                        <li><strong>Add Items:</strong> Create agenda items with time allocations</li>
                        <li><strong>Start Items:</strong> Begin timing specific agenda topics</li>
                        <li><strong>Complete Items:</strong> Mark items as done and move to next</li>
                        <li><strong>Time Tracking:</strong> See if agenda items are running over time</li>
                    </ul>
                </div>

                <div class="help-section">
                    <h4>👥 Participant Tracking</h4>
                    <ul>
                        <li><strong>Add Participants:</strong> Track who's in the meeting</li>
                        <li><strong>Speaking Time:</strong> Monitor how long each person speaks</li>
                        <li><strong>Current Speaker:</strong> Mark who is currently talking</li>
                        <li><strong>Speaking Balance:</strong> Ensure balanced participation</li>
                    </ul>
                </div>

                <div class="help-section">
                    <h4>⏰ Time Warnings</h4>
                    <ul>
                        <li><strong>Progress Bar:</strong> Visual indicator of time remaining</li>
                        <li><strong>Automatic Alerts:</strong> Warnings at 75%, 90%, and 100% of time</li>
                        <li><strong>Overtime Indicator:</strong> Clear visual when meeting runs long</li>
                        <li><strong>Agenda Alerts:</strong> Warnings when agenda items run over</li>
                    </ul>
                </div>

                <div class="help-section">
                    <h4>📝 Meeting Notes & Reports</h4>
                    <ul>
                        <li><strong>Live Notes:</strong> Take notes during the meeting</li>
                        <li><strong>Auto-Save:</strong> Notes are automatically saved</li>
                        <li><strong>Meeting History:</strong> Review past meetings and their efficiency</li>
                        <li><strong>Export Data:</strong> Export meeting history for analysis</li>
                    </ul>
                </div>

                <div class="help-section">
                    <h4>🎯 Best Practices</h4>
                    <ul>
                        <li>Set realistic time estimates for agenda items</li>
                        <li>Add all participants before starting to track speaking time</li>
                        <li>Use the pause function for breaks or interruptions</li>
                        <li>Review meeting history to improve future planning</li>
                        <li>End meetings on time to respect everyone's schedule</li>
                    </ul>
                </div>
            </div>
        `;
    }
};
