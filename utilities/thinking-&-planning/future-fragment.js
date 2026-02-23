// Future Fragment - Send messages to future self
export default {
    init() {
        return {
            message: '',
            deliveryDate: '',
            fragments: JSON.parse(localStorage.getItem('future-fragments') || '[]'),
            deliveredFragments: [],
            currentFragment: null
        };
    },

    render(container, state, setState) {
        // Check for fragments to deliver
        this.checkDeliveries(state, setState);

        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Future Fragment</h2>
                <p>Send messages to your future self - wisdom, reminders, or encouragement when you need it most</p>

                ${state.currentFragment ? `
                    <div class="card" style="margin: 20px 0; border: 3px solid var(--color-primary); background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); color: white;">
                        <h3>⭐ A Message from Your Past Self Has Arrived!</h3>
                        <div style="margin: 20px 0; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 8px;">
                            <p style="font-size: 1.25rem; line-height: 1.6;">
                                "${state.currentFragment.message}"
                            </p>
                            <p style="margin-top: 15px; opacity: 0.9;">
                                <small>Written on ${new Date(state.currentFragment.created).toLocaleDateString()}</small>
                            </p>
                        </div>
                        <button class="btn" style="background: white; color: var(--color-primary);" id="acknowledge-btn">
                            Thank You, Past Me
                        </button>
                    </div>
                ` : ''}

                <div class="card" style="margin: 20px 0;">
                    <h3>Create a Future Fragment</h3>

                    <div class="form-group">
                        <label class="label">Message to Future Self:</label>
                        <textarea
                            class="textarea"
                            id="message-input"
                            placeholder="Write something your future self needs to hear..."
                            style="min-height: 150px;"
                        >${state.message}</textarea>
                    </div>

                    <div class="form-group">
                        <label class="label">When should you receive this?</label>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px;">
                            <button class="btn btn-secondary" data-days="1">Tomorrow</button>
                            <button class="btn btn-secondary" data-days="7">Next Week</button>
                            <button class="btn btn-secondary" data-days="30">Next Month</button>
                            <button class="btn btn-secondary" data-days="90">3 Months</button>
                            <button class="btn btn-secondary" data-days="180">6 Months</button>
                            <button class="btn btn-secondary" data-days="365">Next Year</button>
                        </div>
                        <div style="margin-top: 10px;">
                            <label class="label">Or choose specific date:</label>
                            <input
                                type="date"
                                class="input"
                                id="date-input"
                                min="${new Date().toISOString().split('T')[0]}"
                                value="${state.deliveryDate}"
                            />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="label">Message Type (helps with timing):</label>
                        <select class="input" id="type-select">
                            <option value="encouragement">Encouragement</option>
                            <option value="reminder">Reminder</option>
                            <option value="wisdom">Wisdom</option>
                            <option value="celebration">Celebration</option>
                            <option value="warning">Warning</option>
                            <option value="question">Question to Ponder</option>
                        </select>
                    </div>

                    <button class="btn btn-primary" id="send-btn" style="width: 100%;">
                        Send to Future Self
                    </button>
                </div>

                <div class="card">
                    <h3>Scheduled Fragments</h3>
                    ${state.fragments.length === 0 ? `
                        <p style="color: var(--color-neutral-500);">No fragments scheduled yet. Send your first message to the future!</p>
                    ` : `
                        <div style="display: grid; gap: 10px;">
                            ${state.fragments.map((fragment, i) => `
                                <div style="padding: 15px; background: var(--color-neutral-100); border-radius: 8px;">
                                    <div style="display: flex; justify-content: space-between; align-items: start;">
                                        <div style="flex: 1;">
                                            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                                                <span class="badge badge-primary">${fragment.type}</span>
                                                <small>Arrives: ${new Date(fragment.deliveryDate).toLocaleDateString()}</small>
                                            </div>
                                            <p style="font-style: italic; color: var(--color-neutral-600);">
                                                "${fragment.message.substring(0, 100)}${fragment.message.length > 100 ? '...' : ''}"
                                            </p>
                                            <small style="color: var(--color-neutral-500);">
                                                ${this.getTimeUntilDelivery(fragment.deliveryDate)}
                                            </small>
                                        </div>
                                        <button class="btn btn-ghost" data-delete="${i}">×</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>

                ${state.deliveredFragments.length > 0 ? `
                    <div class="card" style="margin-top: 20px;">
                        <h3>Delivered Fragments</h3>
                        <div style="display: grid; gap: 10px;">
                            ${state.deliveredFragments.slice(-5).map(fragment => `
                                <div style="padding: 15px; background: var(--color-neutral-100); border-radius: 8px; opacity: 0.8;">
                                    <p>"${fragment.message}"</p>
                                    <small>Delivered: ${new Date(fragment.deliveredDate).toLocaleDateString()}</small>
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
        const messageInput = container.querySelector('#message-input');
        if (messageInput) {
            messageInput.addEventListener('input', (e) => {
                setState({ message: e.target.value });
            });
        }

        const dateInput = container.querySelector('#date-input');
        if (dateInput) {
            dateInput.addEventListener('change', (e) => {
                setState({ deliveryDate: e.target.value });
            });
        }

        // Quick date buttons
        container.querySelectorAll('[data-days]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const days = parseInt(e.target.dataset.days);
                const date = new Date();
                date.setDate(date.getDate() + days);
                setState({ deliveryDate: date.toISOString().split('T')[0] });

                const dateInput = container.querySelector('#date-input');
                if (dateInput) {
                    dateInput.value = date.toISOString().split('T')[0];
                }
            });
        });

        const sendBtn = container.querySelector('#send-btn');
        if (sendBtn) {
            sendBtn.addEventListener('click', () => {
                const typeSelect = container.querySelector('#type-select');
                const type = typeSelect ? typeSelect.value : 'general';

                if (state.message && state.deliveryDate) {
                    const fragment = {
                        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
                        message: state.message,
                        type: type,
                        created: Date.now(),
                        deliveryDate: new Date(state.deliveryDate).getTime()
                    };

                    const newFragments = [...state.fragments, fragment].sort((a, b) => a.deliveryDate - b.deliveryDate);
                    localStorage.setItem('future-fragments', JSON.stringify(newFragments));

                    setState({
                        fragments: newFragments,
                        message: '',
                        deliveryDate: ''
                    });

                    alert(`Fragment scheduled! You'll receive it on ${new Date(fragment.deliveryDate).toLocaleDateString()}`);
                } else {
                    alert('Please write a message and choose a delivery date');
                }
            });
        }

        // Delete fragments
        container.querySelectorAll('[data-delete]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.delete);
                const newFragments = state.fragments.filter((_, i) => i !== index);
                localStorage.setItem('future-fragments', JSON.stringify(newFragments));
                setState({ fragments: newFragments });
            });
        });

        // Acknowledge delivered fragment
        const acknowledgeBtn = container.querySelector('#acknowledge-btn');
        if (acknowledgeBtn) {
            acknowledgeBtn.addEventListener('click', () => {
                setState({ currentFragment: null });
            });
        }
    },

    checkDeliveries(state, setState) {
        const now = Date.now();
        const toDeliver = state.fragments.filter(f => f.deliveryDate <= now);

        if (toDeliver.length > 0 && !state.currentFragment) {
            const fragment = toDeliver[0];
            const remainingFragments = state.fragments.filter(f => f.id !== fragment.id);
            const delivered = [...state.deliveredFragments, { ...fragment, deliveredDate: now }];

            localStorage.setItem('future-fragments', JSON.stringify(remainingFragments));

            setState({
                currentFragment: fragment,
                fragments: remainingFragments,
                deliveredFragments: delivered
            });
        }
    },

    getTimeUntilDelivery(deliveryDate) {
        const now = Date.now();
        const diff = deliveryDate - now;

        if (diff <= 0) return 'Ready for delivery';

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        if (days > 365) return `${Math.floor(days / 365)} year${Math.floor(days / 365) > 1 ? 's' : ''} from now`;
        if (days > 30) return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? 's' : ''} from now`;
        if (days > 0) return `${days} day${days > 1 ? 's' : ''} from now`;
        return `${hours} hour${hours !== 1 ? 's' : ''} from now`;
    },

    help() {
        return `
            <ul>
                <li>Write messages to your future self - encouragement, wisdom, or reminders</li>
                <li>Choose when you want to receive each message</li>
                <li>Messages appear automatically when their time comes</li>
                <li>Perfect for goal reminders, milestone celebrations, or tough times</li>
                <li>Your past self becomes your best mentor</li>
                <li>All fragments are stored locally and private</li>
            </ul>
        `;
    }
};