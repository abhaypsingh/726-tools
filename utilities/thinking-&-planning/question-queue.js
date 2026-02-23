// Question Queue - Prioritize and organize your questions for systematic exploration
export default {
    init() {
        return {
            newQuestion: '',
            questions: JSON.parse(localStorage.getItem('question-queue') || '[]'),
            currentQuestion: null,
            researchTime: 0,
            categories: ['urgent', 'important', 'curious', 'someday'],
            selectedCategory: 'curious',
            history: JSON.parse(localStorage.getItem('question-queue-history') || '[]')
        };
    },

    render(container, state, setState) {
        const categorizedQuestions = this.categorizeQuestions(state.questions);
        const nextQuestion = this.getNextQuestionToResearch(state.questions);

        container.innerHTML = `
            <div class="utility-workspace">
                <h2>❓ Question Queue</h2>
                <p>Organize your curiosities and questions for systematic exploration</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>Add New Question</h3>
                    <div class="form-group">
                        <label class="label">What are you wondering about?</label>
                        <textarea
                            class="textarea"
                            id="question-input"
                            placeholder="How does quantum computing work? Why do some people seem naturally confident? What's the best way to..."
                            style="min-height: 80px;"
                        >${state.newQuestion}</textarea>
                    </div>

                    <div class="form-group">
                        <label class="label">Question Priority:</label>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                            ${state.categories.map(category => `
                                <label class="checkbox-label" style="display: flex; align-items: center; padding: 8px; border: 2px solid ${state.selectedCategory === category ? 'var(--color-primary)' : 'var(--color-neutral-300)'}; border-radius: 6px; cursor: pointer;">
                                    <input type="radio" name="category" value="${category}" ${state.selectedCategory === category ? 'checked' : ''} style="margin-right: 8px;" />
                                    <div>
                                        <strong>${this.getCategoryLabel(category)}</strong>
                                        <div style="font-size: 0.8rem; color: var(--color-neutral-600);">${this.getCategoryDescription(category)}</div>
                                    </div>
                                </label>
                            `).join('')}
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="label">Estimated research time (minutes):</label>
                        <input
                            type="range"
                            min="5"
                            max="120"
                            value="${state.researchTime || 30}"
                            id="time-slider"
                            style="width: 100%;"
                        />
                        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--color-neutral-600);">
                            <span>Quick (5 min)</span>
                            <span class="badge badge-primary">${state.researchTime || 30} minutes</span>
                            <span>Deep dive (2 hours)</span>
                        </div>
                    </div>

                    <button class="btn btn-primary" id="add-question-btn" style="width: 100%;">
                        📝 Add to Queue
                    </button>
                </div>

                ${nextQuestion ? `
                    <div class="card" style="border: 2px solid var(--color-success); background: linear-gradient(135deg, #d4edda, #c3e6cb);">
                        <h3>🎯 Next Question to Research</h3>
                        <div style="margin: 15px 0;">
                            <div style="font-size: 1.2rem; font-weight: 600; margin-bottom: 10px;">
                                "${nextQuestion.text}"
                            </div>
                            <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                                <span class="badge badge-${this.getCategoryColor(nextQuestion.category)}">
                                    ${this.getCategoryLabel(nextQuestion.category)}
                                </span>
                                <span class="badge badge-neutral">
                                    ~${nextQuestion.estimatedTime} min
                                </span>
                                <span class="badge badge-neutral">
                                    Added ${new Date(nextQuestion.dateAdded).toLocaleDateString()}
                                </span>
                            </div>
                        </div>

                        <div style="display: flex; gap: 10px;">
                            <button class="btn btn-success" id="start-research-btn" data-id="${nextQuestion.id}">
                                🔍 Start Researching
                            </button>
                            <button class="btn btn-secondary" id="mark-answered-btn" data-id="${nextQuestion.id}">
                                ✅ Mark as Answered
                            </button>
                            <button class="btn btn-warning" id="defer-question-btn" data-id="${nextQuestion.id}">
                                ⏰ Defer to Later
                            </button>
                        </div>
                    </div>
                ` : ''}

                <div class="card" style="margin: 20px 0;">
                    <h3>Question Queue by Category</h3>
                    ${Object.keys(categorizedQuestions).map(category => `
                        <div style="margin: 15px 0;">
                            <h4 style="display: flex; align-items: center; gap: 10px;">
                                ${this.getCategoryLabel(category)}
                                <span class="badge badge-${this.getCategoryColor(category)}">
                                    ${categorizedQuestions[category].length}
                                </span>
                            </h4>
                            ${categorizedQuestions[category].length === 0 ? `
                                <p style="color: var(--color-neutral-500); font-style: italic;">No questions in this category</p>
                            ` : `
                                <div style="display: grid; gap: 8px;">
                                    ${categorizedQuestions[category].slice(0, 5).map(question => `
                                        <div class="card" style="background: var(--color-neutral-100); display: flex; justify-content: space-between; align-items: start;">
                                            <div style="flex: 1;">
                                                <div style="font-weight: 500; margin-bottom: 5px;">
                                                    "${question.text.substring(0, 80)}${question.text.length > 80 ? '...' : ''}"
                                                </div>
                                                <div style="font-size: 0.8rem; color: var(--color-neutral-600);">
                                                    ~${question.estimatedTime} min • ${new Date(question.dateAdded).toLocaleDateString()}
                                                </div>
                                            </div>
                                            <div style="display: flex; gap: 5px;">
                                                <button class="btn btn-small btn-success" data-research="${question.id}">🔍</button>
                                                <button class="btn btn-small btn-error" data-delete="${question.id}">×</button>
                                            </div>
                                        </div>
                                    `).join('')}
                                    ${categorizedQuestions[category].length > 5 ? `
                                        <p style="text-align: center; color: var(--color-neutral-500);">
                                            +${categorizedQuestions[category].length - 5} more questions...
                                        </p>
                                    ` : ''}
                                </div>
                            `}
                        </div>
                    `).join('')}
                </div>

                ${state.history.length > 0 ? `
                    <div class="card">
                        <h3>Recently Explored Questions</h3>
                        <div style="display: grid; gap: 10px;">
                            ${state.history.slice(-3).reverse().map(entry => `
                                <div class="card" style="background: var(--color-neutral-100);">
                                    <div style="font-weight: 500; margin-bottom: 5px;">
                                        "${entry.question}"
                                    </div>
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <span class="badge badge-success">✅ Explored</span>
                                        <small>${new Date(entry.date).toLocaleDateString()}</small>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <div class="card" style="background: linear-gradient(135deg, #e8f4f8, #f0f8ff);">
                    <h3>💡 Question Queue Stats</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px; margin: 15px 0;">
                        <div style="text-align: center;">
                            <div style="font-size: 1.8rem; font-weight: bold; color: var(--color-primary);">
                                ${state.questions.length}
                            </div>
                            <div>Total Questions</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 1.8rem; font-weight: bold; color: var(--color-warning);">
                                ${categorizedQuestions.urgent.length}
                            </div>
                            <div>Urgent</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 1.8rem; font-weight: bold; color: var(--color-success);">
                                ${state.history.length}
                            </div>
                            <div>Explored</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 1.8rem; font-weight: bold; color: var(--color-neutral-600);">
                                ${Math.round(state.questions.reduce((sum, q) => sum + q.estimatedTime, 0) / 60)}h
                            </div>
                            <div>Total Time</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.setupEventListeners(container, state, setState);
    },

    setupEventListeners(container, state, setState) {
        const questionInput = container.querySelector('#question-input');
        if (questionInput) {
            questionInput.addEventListener('input', (e) => {
                setState({ newQuestion: e.target.value });
            });
        }

        const timeSlider = container.querySelector('#time-slider');
        if (timeSlider) {
            timeSlider.addEventListener('input', (e) => {
                setState({ researchTime: parseInt(e.target.value) });
            });
        }

        // Category selection
        container.querySelectorAll('input[name="category"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                setState({ selectedCategory: e.target.value });
            });
        });

        const addBtn = container.querySelector('#add-question-btn');
        if (addBtn) {
            addBtn.addEventListener('click', () => {
                if (state.newQuestion.trim()) {
                    const newQuestion = {
                        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
                        text: state.newQuestion.trim(),
                        category: state.selectedCategory,
                        estimatedTime: state.researchTime || 30,
                        dateAdded: Date.now(),
                        priority: this.calculatePriority(state.selectedCategory, state.researchTime || 30)
                    };

                    const updatedQuestions = [...state.questions, newQuestion];
                    localStorage.setItem('question-queue', JSON.stringify(updatedQuestions));

                    setState({
                        questions: updatedQuestions,
                        newQuestion: '',
                        researchTime: 30
                    });

                    alert('✅ Question added to your queue!');
                } else {
                    alert('Please enter a question first');
                }
            });
        }

        // Research buttons
        container.querySelectorAll('[data-research]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const questionId = e.target.dataset.research;
                this.startResearch(questionId, state, setState);
            });
        });

        // Delete buttons
        container.querySelectorAll('[data-delete]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const questionId = e.target.dataset.delete;
                this.deleteQuestion(questionId, state, setState);
            });
        });

        // Main action buttons
        const startResearchBtn = container.querySelector('#start-research-btn');
        if (startResearchBtn) {
            startResearchBtn.addEventListener('click', (e) => {
                const questionId = e.target.dataset.id;
                this.startResearch(questionId, state, setState);
            });
        }

        const markAnsweredBtn = container.querySelector('#mark-answered-btn');
        if (markAnsweredBtn) {
            markAnsweredBtn.addEventListener('click', (e) => {
                const questionId = e.target.dataset.id;
                this.markAsAnswered(questionId, state, setState);
            });
        }

        const deferBtn = container.querySelector('#defer-question-btn');
        if (deferBtn) {
            deferBtn.addEventListener('click', (e) => {
                const questionId = e.target.dataset.id;
                this.deferQuestion(questionId, state, setState);
            });
        }
    },

    categorizeQuestions(questions) {
        const categories = { urgent: [], important: [], curious: [], someday: [] };
        questions.forEach(question => {
            if (categories[question.category]) {
                categories[question.category].push(question);
            }
        });

        // Sort within each category by priority
        Object.keys(categories).forEach(category => {
            categories[category].sort((a, b) => b.priority - a.priority);
        });

        return categories;
    },

    getNextQuestionToResearch(questions) {
        if (questions.length === 0) return null;

        // Prioritize by category, then by priority score
        const categoryOrder = { urgent: 4, important: 3, curious: 2, someday: 1 };

        return questions
            .sort((a, b) => {
                const categoryDiff = categoryOrder[b.category] - categoryOrder[a.category];
                return categoryDiff !== 0 ? categoryDiff : b.priority - a.priority;
            })[0];
    },

    calculatePriority(category, estimatedTime) {
        const categoryWeights = { urgent: 4, important: 3, curious: 2, someday: 1 };
        const timeWeight = Math.max(1, (120 - estimatedTime) / 10); // Favor shorter questions slightly
        return (categoryWeights[category] || 1) * 10 + timeWeight;
    },

    getCategoryLabel(category) {
        const labels = {
            urgent: '🔴 Urgent',
            important: '🟡 Important',
            curious: '🟢 Curious',
            someday: '🔵 Someday'
        };
        return labels[category] || category;
    },

    getCategoryDescription(category) {
        const descriptions = {
            urgent: 'Need to know ASAP',
            important: 'Important but not urgent',
            curious: 'Just curious about this',
            someday: 'Would be nice to know'
        };
        return descriptions[category] || '';
    },

    getCategoryColor(category) {
        const colors = {
            urgent: 'error',
            important: 'warning',
            curious: 'success',
            someday: 'neutral'
        };
        return colors[category] || 'neutral';
    },

    startResearch(questionId, state, setState) {
        const question = state.questions.find(q => q.id === questionId);
        if (!question) return;

        const answer = prompt(`Research time! What did you learn about:\n\n"${question.text}"\n\nEnter your findings or insights:`);

        if (answer) {
            this.markAsAnswered(questionId, state, setState, answer);
        }
    },

    markAsAnswered(questionId, state, setState, answer = null) {
        const question = state.questions.find(q => q.id === questionId);
        if (!question) return;

        // Remove from questions queue
        const updatedQuestions = state.questions.filter(q => q.id !== questionId);
        localStorage.setItem('question-queue', JSON.stringify(updatedQuestions));

        // Add to history
        const historyEntry = {
            question: question.text,
            category: question.category,
            timeSpent: question.estimatedTime,
            answer: answer || 'Marked as researched',
            date: Date.now()
        };

        const updatedHistory = [...state.history, historyEntry];
        if (updatedHistory.length > 100) updatedHistory.shift(); // Keep last 100

        localStorage.setItem('question-queue-history', JSON.stringify(updatedHistory));

        setState({
            questions: updatedQuestions,
            history: updatedHistory
        });

        alert('🎉 Great job researching that question!');
    },

    deferQuestion(questionId, state, setState) {
        const question = state.questions.find(q => q.id === questionId);
        if (!question) return;

        // Change category to someday and reduce priority
        const updatedQuestions = state.questions.map(q =>
            q.id === questionId
                ? { ...q, category: 'someday', priority: q.priority * 0.5 }
                : q
        );

        localStorage.setItem('question-queue', JSON.stringify(updatedQuestions));
        setState({ questions: updatedQuestions });

        alert('📅 Question deferred to someday list');
    },

    deleteQuestion(questionId, state, setState) {
        if (confirm('Are you sure you want to delete this question?')) {
            const updatedQuestions = state.questions.filter(q => q.id !== questionId);
            localStorage.setItem('question-queue', JSON.stringify(updatedQuestions));
            setState({ questions: updatedQuestions });
        }
    },

    help() {
        return `
            <ul>
                <li>Add questions you want to research to your organized queue</li>
                <li>Categorize questions by urgency: Urgent, Important, Curious, or Someday</li>
                <li>Estimate research time to help prioritize your learning</li>
                <li>Work on the highest-priority question next</li>
                <li>Mark questions as answered when you've researched them</li>
                <li>Track your learning progress with the history feature</li>
                <li>Defer non-urgent questions to focus on what matters most</li>
            </ul>
        `;
    }
};