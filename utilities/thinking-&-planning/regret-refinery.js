// Regret Refinery - Transform regrets into valuable life lessons and wisdom
export default {
    init() {
        return {
            regret: '',
            refinedOutput: null,
            processing: false,
            wisdom: [],
            history: JSON.parse(localStorage.getItem('regret-refinery-history') || '[]'),
            wisdomLibrary: JSON.parse(localStorage.getItem('regret-wisdom-library') || '[]')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>⚗️ Regret Refinery</h2>
                <p>Transform your regrets into valuable life lessons and hard-won wisdom</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>What Do You Regret?</h3>
                    <div class="form-group">
                        <label class="label">Describe your regret honestly:</label>
                        <textarea
                            class="textarea"
                            id="regret-input"
                            placeholder="I regret not taking that job opportunity... I wish I had been braver in that situation... I should have spoken up when..."
                            style="min-height: 120px;"
                        >${state.regret}</textarea>
                    </div>

                    <button class="btn btn-primary" id="refine-btn" style="width: 100%;" ${state.processing ? 'disabled' : ''}>
                        ${state.processing ? '⚗️ Refining...' : '⚗️ Refine This Regret'}
                    </button>
                </div>

                ${state.refinedOutput ? `
                    <div class="card" style="border: 2px solid var(--color-primary); background: linear-gradient(135deg, #f8f9fa, #e9ecef);">
                        <h3>💎 Refined Wisdom</h3>
                        <div style="display: grid; gap: 20px;">

                            <div class="card" style="background: linear-gradient(135deg, #fff3cd, #ffeaa7);">
                                <h4>🔍 Raw Emotion Extracted</h4>
                                <p style="font-style: italic; font-size: 1.1rem; line-height: 1.5;">
                                    "${state.refinedOutput.rawEmotion}"
                                </p>
                            </div>

                            <div>
                                <h4>📚 Life Lessons Distilled</h4>
                                <div style="display: grid; gap: 10px;">
                                    ${state.refinedOutput.lessons.map((lesson, i) => `
                                        <div class="card" style="background: linear-gradient(135deg, #d4edda, #c3e6cb); border-left: 4px solid var(--color-success);">
                                            <div style="display: flex; align-items: start; gap: 10px;">
                                                <div style="background: var(--color-success); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold; flex-shrink: 0;">
                                                    ${i + 1}
                                                </div>
                                                <div>
                                                    <strong>${lesson.insight}</strong>
                                                    <p style="margin: 5px 0 0 0; color: var(--color-neutral-700);">
                                                        ${lesson.application}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <div>
                                <h4>🛡️ Future Safeguards</h4>
                                <div style="display: grid; gap: 8px;">
                                    ${state.refinedOutput.preventiveMeasures.map(measure => `
                                        <div style="padding: 10px; background: linear-gradient(135deg, #e8f4f8, #f0f8ff); border-left: 3px solid var(--color-primary); border-radius: 4px;">
                                            <strong>Strategy:</strong> ${measure}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <div class="card" style="background: linear-gradient(135deg, #f8d7da, #f5c6cb); border: 2px solid #d73502;">
                                <h4>💖 Self-Compassion Statement</h4>
                                <p style="font-size: 1.1rem; line-height: 1.6; font-style: italic; text-align: center; margin: 0;">
                                    "${state.refinedOutput.forgiveness}"
                                </p>
                            </div>

                            <div style="text-align: center;">
                                <button class="btn btn-success" id="save-wisdom-btn" style="margin-right: 10px;">
                                    💎 Save to Wisdom Library
                                </button>
                                <button class="btn btn-secondary" id="start-over-btn">
                                    🔄 Process Another Regret
                                </button>
                            </div>
                        </div>
                    </div>
                ` : ''}

                ${state.wisdomLibrary.length > 0 ? `
                    <div class="card">
                        <h3>📖 Your Wisdom Library</h3>
                        <p style="margin-bottom: 15px; color: var(--color-neutral-600);">
                            Hard-won wisdom from life's challenges
                        </p>
                        <div style="display: grid; gap: 15px;">
                            ${state.wisdomLibrary.slice(-3).reverse().map((entry, i) => `
                                <div class="card" style="background: var(--color-neutral-100);">
                                    <div style="margin-bottom: 10px;">
                                        <div style="font-weight: 600; color: var(--color-primary);">
                                            Lesson from: "${entry.originalRegret.substring(0, 60)}${entry.originalRegret.length > 60 ? '...' : ''}"
                                        </div>
                                        <small style="color: var(--color-neutral-500);">
                                            Refined on ${new Date(entry.date).toLocaleDateString()}
                                        </small>
                                    </div>

                                    <div style="margin: 10px 0;">
                                        <strong>Key Wisdom:</strong>
                                        <ul style="margin: 5px 0;">
                                            ${entry.lessons.slice(0, 2).map(lesson => `
                                                <li style="margin: 3px 0; color: var(--color-success);">
                                                    ✨ ${lesson.insight}
                                                </li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        ${state.wisdomLibrary.length > 3 ? `
                            <p style="text-align: center; color: var(--color-neutral-500); margin-top: 10px;">
                                +${state.wisdomLibrary.length - 3} more wisdom entries in your library
                            </p>
                        ` : ''}
                    </div>
                ` : ''}

                <div class="card" style="background: linear-gradient(135deg, #e8f5e8, #f0f8f0);">
                    <h3>🌱 The Refinery Process</h3>
                    <div style="display: grid; gap: 10px; margin: 15px 0;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="background: var(--color-primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">1</div>
                            <div><strong>Extract:</strong> Pull out the raw emotional content</div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="background: var(--color-primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">2</div>
                            <div><strong>Distill:</strong> Transform pain into key insights</div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="background: var(--color-primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">3</div>
                            <div><strong>Protect:</strong> Create safeguards for the future</div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="background: var(--color-primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">4</div>
                            <div><strong>Heal:</strong> Generate self-compassion and forgiveness</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.setupEventListeners(container, state, setState);
    },

    setupEventListeners(container, state, setState) {
        const regretInput = container.querySelector('#regret-input');
        if (regretInput) {
            regretInput.addEventListener('input', (e) => {
                setState({ regret: e.target.value });
            });
        }

        const refineBtn = container.querySelector('#refine-btn');
        if (refineBtn) {
            refineBtn.addEventListener('click', () => {
                if (state.regret.trim()) {
                    this.refineRegret(state, setState);
                } else {
                    alert('Please enter a regret to refine');
                }
            });
        }

        const saveWisdomBtn = container.querySelector('#save-wisdom-btn');
        if (saveWisdomBtn) {
            saveWisdomBtn.addEventListener('click', () => {
                this.saveToWisdomLibrary(state, setState);
            });
        }

        const startOverBtn = container.querySelector('#start-over-btn');
        if (startOverBtn) {
            startOverBtn.addEventListener('click', () => {
                setState({
                    regret: '',
                    refinedOutput: null,
                    processing: false
                });
            });
        }
    },

    refineRegret(state, setState) {
        setState({ processing: true });

        setTimeout(() => {
            const refinedOutput = this.processRegret(state.regret);

            const historyEntry = {
                regret: state.regret,
                lessons: refinedOutput.lessons.length,
                date: Date.now()
            };

            const updatedHistory = [...state.history, historyEntry];
            if (updatedHistory.length > 50) updatedHistory.shift();

            localStorage.setItem('regret-refinery-history', JSON.stringify(updatedHistory));

            setState({
                refinedOutput,
                processing: false,
                history: updatedHistory
            });
        }, 2000); // Give time for the refining animation
    },

    processRegret(regret) {
        // Extract raw emotional content
        const rawEmotion = this.extractRawEmotion(regret);

        // Transform into lessons
        const lessons = this.distillLessons(regret);

        // Generate preventive measures
        const preventiveMeasures = this.generatePreventiveMeasures(regret);

        // Create forgiveness statement
        const forgiveness = this.generateForgiveness(regret);

        return {
            rawEmotion,
            lessons,
            preventiveMeasures,
            forgiveness
        };
    },

    extractRawEmotion(regret) {
        const regretLower = regret.toLowerCase();

        if (regretLower.includes('not') && regretLower.includes('opportunity')) {
            return "The deep ache of a door that closed while I hesitated at the threshold.";
        } else if (regretLower.includes('should have') && regretLower.includes('said')) {
            return "The weight of words unspoken, truths that deserved to see the light.";
        } else if (regretLower.includes('hurt') || regretLower.includes('pain')) {
            return "The sharp recognition of harm caused, and the wish to undo what cannot be undone.";
        } else if (regretLower.includes('time') || regretLower.includes('wasted')) {
            return "The hollow feeling of precious time that slipped through my fingers like sand.";
        } else if (regretLower.includes('fear') || regretLower.includes('scared')) {
            return "The bitter taste of letting fear make my choices instead of courage.";
        } else {
            return "The complex mix of 'what if' and 'if only' that colors this memory.";
        }
    },

    distillLessons(regret) {
        const lessons = [];
        const regretLower = regret.toLowerCase();

        // Universal lessons that apply to most regrets
        lessons.push({
            insight: "Every regret carries the seed of wisdom",
            application: "This painful experience has taught me something valuable about myself and life."
        });

        // Specific lessons based on regret content
        if (regretLower.includes('not') && (regretLower.includes('opportunity') || regretLower.includes('chance'))) {
            lessons.push({
                insight: "Hesitation costs more than failure",
                application: "Next time I face an opportunity, I'll remember that trying and failing beats never trying at all."
            });
        }

        if (regretLower.includes('should have') && regretLower.includes('said')) {
            lessons.push({
                insight: "Authentic communication requires courage",
                application: "I'll practice speaking my truth with kindness, even when it feels uncomfortable."
            });
        }

        if (regretLower.includes('hurt') || regretLower.includes('harm')) {
            lessons.push({
                insight: "Impact matters more than intention",
                application: "I'll pay closer attention to how my actions affect others, not just what I meant to do."
            });
        }

        if (regretLower.includes('time') || regretLower.includes('wasted')) {
            lessons.push({
                insight: "Presence is the antidote to wasted time",
                application: "I'll focus on being fully engaged in whatever I'm doing, rather than going through the motions."
            });
        }

        if (regretLower.includes('fear') || regretLower.includes('afraid')) {
            lessons.push({
                insight: "Courage is action despite fear, not absence of fear",
                application: "I'll acknowledge my fears while still choosing to act in alignment with my values."
            });
        }

        // Always add a lesson about self-compassion
        lessons.push({
            insight: "Self-compassion accelerates growth more than self-criticism",
            application: "I'll treat myself with the same kindness I'd show a good friend facing this situation."
        });

        return lessons;
    },

    generatePreventiveMeasures(regret) {
        const measures = [];
        const regretLower = regret.toLowerCase();

        // Universal measures
        measures.push("Create a 'future self' check-in: Before big decisions, ask what my 80-year-old self would advise");

        // Specific measures based on content
        if (regretLower.includes('not') && regretLower.includes('opportunity')) {
            measures.push("Implement a '72-hour rule': Give myself 3 days to decide on opportunities before saying no");
            measures.push("Keep a 'courage account': Regular small acts of bravery to build confidence for bigger moments");
        }

        if (regretLower.includes('should have') && regretLower.includes('said')) {
            measures.push("Practice difficult conversations with trusted friends first");
            measures.push("Set a 'truth timeline': Address important issues within 48 hours instead of letting them fester");
        }

        if (regretLower.includes('hurt') || regretLower.includes('harm')) {
            measures.push("Develop a pre-action pause: Count to 10 and consider consequences before responding emotionally");
            measures.push("Regular check-ins with people I care about to catch issues early");
        }

        if (regretLower.includes('time') || regretLower.includes('wasted')) {
            measures.push("Weekly time audits: Review where my time actually went vs. where I wanted it to go");
            measures.push("The 'deathbed test': Before major commitments, ask if this aligns with what I want to remember");
        }

        return measures;
    },

    generateForgiveness(regret) {
        const compassionStatements = [
            "I am human, and humans learn through experience, even painful ones. This regret shows I care deeply about doing better.",
            "The person I was then did the best they could with the awareness and resources they had. I honor their struggle while embracing who I'm becoming.",
            "This regret is proof that I've grown. Only someone with higher standards would look back and see how to do better.",
            "I release the burden of perfection and embrace the gift of wisdom that comes through living fully, mistakes and all.",
            "My past self deserves compassion, not condemnation. They were learning, just as I continue to learn now.",
        ];

        return compassionStatements[Math.floor(Math.random() * compassionStatements.length)];
    },

    saveToWisdomLibrary(state, setState) {
        if (!state.refinedOutput) return;

        const wisdomEntry = {
            originalRegret: state.regret,
            rawEmotion: state.refinedOutput.rawEmotion,
            lessons: state.refinedOutput.lessons,
            preventiveMeasures: state.refinedOutput.preventiveMeasures,
            forgiveness: state.refinedOutput.forgiveness,
            date: Date.now()
        };

        const updatedWisdom = [...state.wisdomLibrary, wisdomEntry];
        localStorage.setItem('regret-wisdom-library', JSON.stringify(updatedWisdom));

        setState({
            wisdomLibrary: updatedWisdom,
            regret: '',
            refinedOutput: null
        });

        alert('💎 Wisdom saved! Your regret has been transformed into lasting insight.');
    },

    help() {
        return `
            <ul>
                <li>Enter a regret you're carrying - be honest and specific</li>
                <li>The refinery will extract the raw emotion and transform it</li>
                <li>Receive distilled life lessons from your experience</li>
                <li>Get practical safeguards to prevent similar regrets</li>
                <li>Practice self-compassion with personalized forgiveness</li>
                <li>Build your wisdom library from transformed regrets</li>
                <li>Remember: Regrets refined become the gold of wisdom</li>
            </ul>
        `;
    }
};