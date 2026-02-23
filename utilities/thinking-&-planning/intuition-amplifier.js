// Intuition Amplifier - Strengthen and clarify your gut feelings
export default {
    init() {
        return {
            gutFeeling: '',
            feelingStrength: 5,
            situation: '',
            analysis: null,
            quietingExercise: false,
            pastIntuitions: JSON.parse(localStorage.getItem('intuition-amplifier-past') || '[]'),
            history: JSON.parse(localStorage.getItem('intuition-amplifier-history') || '[]')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>🎯 Intuition Amplifier</h2>
                <p>Strengthen and clarify your gut feelings by filtering out mental noise</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>What's Your Gut Telling You?</h3>
                    <div class="form-group">
                        <label class="label">Describe the situation:</label>
                        <textarea
                            class="textarea"
                            id="situation-input"
                            placeholder="I'm considering whether to take this new job opportunity..."
                            style="min-height: 80px;"
                        >${state.situation}</textarea>
                    </div>

                    <div class="form-group">
                        <label class="label">What does your gut feel about this?</label>
                        <textarea
                            class="textarea"
                            id="gut-feeling-input"
                            placeholder="Something feels off about this opportunity, but I can't put my finger on it..."
                            style="min-height: 80px;"
                        >${state.gutFeeling}</textarea>
                    </div>

                    <div class="form-group">
                        <label class="label">How strong is this feeling? (1-10)</label>
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <input
                                type="range"
                                min="1"
                                max="10"
                                value="${state.feelingStrength}"
                                id="strength-slider"
                                style="flex: 1;"
                            />
                            <div class="badge badge-primary" style="min-width: 50px; text-align: center;">
                                ${state.feelingStrength}/10
                            </div>
                        </div>
                        <small style="display: flex; justify-content: space-between; margin-top: 5px;">
                            <span>Barely noticeable</span>
                            <span>Overwhelming</span>
                        </small>
                    </div>

                    <button class="btn btn-primary" id="amplify-btn" style="width: 100%;">
                        🔊 Amplify Intuition
                    </button>
                </div>

                ${!state.analysis && state.gutFeeling ? `
                    <div class="card" style="background: linear-gradient(135deg, #e8f5e8, #f0f8f0); border-left: 4px solid var(--color-success);">
                        <h3>🧘 First, Let's Quiet the Mental Noise</h3>
                        <p>Before amplifying your intuition, let's create space for it to emerge clearly.</p>

                        <div style="text-align: center; margin: 20px 0;">
                            <button class="btn btn-success" id="start-quiet-btn">
                                🌟 Begin Quieting Exercise
                            </button>
                        </div>

                        ${state.quietingExercise ? `
                            <div class="card" style="background: white; border: 2px solid var(--color-success);">
                                <h4>Intuitive Breathing Exercise</h4>
                                <div id="breathing-guide" style="text-align: center; margin: 20px 0;">
                                    <div style="width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(45deg, var(--color-primary), var(--color-secondary)); margin: 0 auto; display: flex; align-items: center; justify-content: center; animation: pulse 4s infinite;">
                                        <div style="color: white; font-size: 1.2rem; font-weight: bold;">Breathe</div>
                                    </div>
                                    <p id="breathing-instruction" style="margin-top: 15px; font-size: 1.1rem;">
                                        Inhale for 4... Hold for 4... Exhale for 6...
                                    </p>
                                </div>
                                <div style="text-align: center;">
                                    <button class="btn btn-secondary" id="finish-quiet-btn">
                                        I Feel More Centered
                                    </button>
                                </div>
                            </div>

                            <style>
                                @keyframes pulse {
                                    0%, 100% { transform: scale(1); opacity: 0.8; }
                                    50% { transform: scale(1.1); opacity: 1; }
                                }
                            </style>
                        ` : ''}
                    </div>
                ` : ''}

                ${state.analysis ? `
                    <div class="card" style="margin: 20px 0; border: 2px solid var(--color-primary);">
                        <h3>🎯 Amplified Intuition Analysis</h3>
                        <div style="display: grid; gap: 20px;">

                            <div class="card" style="background: linear-gradient(135deg, #fff3cd, #ffeaa7);">
                                <h4>📊 Signal vs Noise</h4>
                                <div style="margin: 15px 0;">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                        <span>Intuitive Signal</span>
                                        <strong>${state.analysis.signal}%</strong>
                                    </div>
                                    <div class="progress-bar" style="background: var(--color-neutral-200); height: 10px; border-radius: 5px;">
                                        <div style="background: var(--color-success); height: 100%; width: ${state.analysis.signal}%; border-radius: 5px;"></div>
                                    </div>
                                </div>

                                <div style="margin: 15px 0;">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                        <span>Mental Chatter</span>
                                        <strong>${state.analysis.noise}%</strong>
                                    </div>
                                    <div class="progress-bar" style="background: var(--color-neutral-200); height: 10px; border-radius: 5px;">
                                        <div style="background: var(--color-warning); height: 100%; width: ${state.analysis.noise}%; border-radius: 5px;"></div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4>🔍 Supporting Evidence (Subconscious Patterns)</h4>
                                <ul>
                                    ${state.analysis.supportingEvidence.map(evidence => `
                                        <li style="margin: 5px 0; color: var(--color-success);">✓ ${evidence}</li>
                                    `).join('')}
                                </ul>
                            </div>

                            <div>
                                <h4>🤔 Contradicting Doubts (Conscious Mind)</h4>
                                <ul>
                                    ${state.analysis.contradictingEvidence.map(doubt => `
                                        <li style="margin: 5px 0; color: var(--color-warning);">⚠ ${doubt}</li>
                                    `).join('')}
                                </ul>
                            </div>

                            <div class="card" style="border: 2px solid ${state.analysis.trustScore >= 70 ? 'var(--color-success)' : state.analysis.trustScore >= 40 ? 'var(--color-warning)' : 'var(--color-error)'};">
                                <h4>🎯 Trust Score</h4>
                                <div style="text-align: center; margin: 15px 0;">
                                    <div style="font-size: 2rem; font-weight: bold; color: ${state.analysis.trustScore >= 70 ? 'var(--color-success)' : state.analysis.trustScore >= 40 ? 'var(--color-warning)' : 'var(--color-error)'};">
                                        ${state.analysis.trustScore}%
                                    </div>
                                    <div style="font-size: 1.1rem; margin-top: 10px;">
                                        ${this.getTrustInterpretation(state.analysis.trustScore)}
                                    </div>
                                </div>
                            </div>

                            <div class="card" style="background: linear-gradient(135deg, #e8f4f8, #f0f8ff); border-left: 4px solid var(--color-primary);">
                                <h4>💡 Amplified Intuitive Guidance</h4>
                                <p style="font-size: 1.1rem; line-height: 1.6;">
                                    "${state.analysis.amplifiedIntuition}"
                                </p>
                                <div style="margin-top: 15px;">
                                    <h5>Recommended Action:</h5>
                                    <p style="font-weight: 600; color: var(--color-primary);">
                                        ${state.analysis.recommendedAction}
                                    </p>
                                </div>
                            </div>

                            <button class="btn btn-success" id="save-intuition-btn" style="width: 100%;">
                                💾 Record This Intuition
                            </button>
                        </div>
                    </div>
                ` : ''}

                ${state.pastIntuitions.length > 0 ? `
                    <div class="card">
                        <h3>📚 Past Intuitions</h3>
                        <p style="margin-bottom: 15px;">Track how your intuitions have played out to build trust in your inner wisdom.</p>
                        <div style="display: grid; gap: 10px;">
                            ${state.pastIntuitions.slice(-3).reverse().map((intuition, i) => `
                                <div class="card" style="background: var(--color-neutral-100);">
                                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                                        <strong>"${intuition.situation.substring(0, 50)}..."</strong>
                                        <div>
                                            <span class="badge ${intuition.trustScore >= 70 ? 'badge-success' : intuition.trustScore >= 40 ? 'badge-warning' : 'badge-error'}">
                                                ${intuition.trustScore}%
                                            </span>
                                            ${intuition.outcome ? `
                                                <span class="badge ${intuition.outcome === 'correct' ? 'badge-success' : 'badge-error'}">
                                                    ${intuition.outcome}
                                                </span>
                                            ` : ''}
                                        </div>
                                    </div>
                                    <p style="font-style: italic; margin-bottom: 10px;">
                                        "${intuition.amplifiedIntuition}"
                                    </p>
                                    ${!intuition.outcome ? `
                                        <div style="display: flex; gap: 10px;">
                                            <button class="btn btn-small btn-success" onclick="this.updateIntuitionOutcome(${i}, 'correct')">
                                                ✓ I was right
                                            </button>
                                            <button class="btn btn-small btn-error" onclick="this.updateIntuitionOutcome(${i}, 'incorrect')">
                                                ✗ I was wrong
                                            </button>
                                        </div>
                                    ` : ''}
                                    <small style="color: var(--color-neutral-500);">
                                        ${new Date(intuition.date).toLocaleDateString()}
                                    </small>
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
        const situationInput = container.querySelector('#situation-input');
        if (situationInput) {
            situationInput.addEventListener('input', (e) => {
                setState({ situation: e.target.value });
            });
        }

        const gutFeelingInput = container.querySelector('#gut-feeling-input');
        if (gutFeelingInput) {
            gutFeelingInput.addEventListener('input', (e) => {
                setState({ gutFeeling: e.target.value });
            });
        }

        const strengthSlider = container.querySelector('#strength-slider');
        if (strengthSlider) {
            strengthSlider.addEventListener('input', (e) => {
                setState({ feelingStrength: parseInt(e.target.value) });
            });
        }

        const startQuietBtn = container.querySelector('#start-quiet-btn');
        if (startQuietBtn) {
            startQuietBtn.addEventListener('click', () => {
                setState({ quietingExercise: true });
                this.startBreathingExercise();
            });
        }

        const finishQuietBtn = container.querySelector('#finish-quiet-btn');
        if (finishQuietBtn) {
            finishQuietBtn.addEventListener('click', () => {
                setState({ quietingExercise: false });
            });
        }

        const amplifyBtn = container.querySelector('#amplify-btn');
        if (amplifyBtn) {
            amplifyBtn.addEventListener('click', () => {
                if (state.gutFeeling && state.situation) {
                    const analysis = this.amplifyIntuition(state.gutFeeling, state.feelingStrength, state.situation);

                    const newHistory = [...state.history, {
                        situation: state.situation,
                        gutFeeling: state.gutFeeling,
                        trustScore: analysis.trustScore,
                        date: Date.now()
                    }];

                    localStorage.setItem('intuition-amplifier-history', JSON.stringify(newHistory));
                    setState({
                        analysis,
                        history: newHistory
                    });
                } else {
                    alert('Please describe both the situation and your gut feeling.');
                }
            });
        }

        const saveIntuitionBtn = container.querySelector('#save-intuition-btn');
        if (saveIntuitionBtn) {
            saveIntuitionBtn.addEventListener('click', () => {
                const newPastIntuition = {
                    situation: state.situation,
                    gutFeeling: state.gutFeeling,
                    trustScore: state.analysis.trustScore,
                    amplifiedIntuition: state.analysis.amplifiedIntuition,
                    recommendedAction: state.analysis.recommendedAction,
                    date: Date.now(),
                    outcome: null
                };

                const updatedPastIntuitions = [...state.pastIntuitions, newPastIntuition];
                localStorage.setItem('intuition-amplifier-past', JSON.stringify(updatedPastIntuitions));

                setState({
                    pastIntuitions: updatedPastIntuitions,
                    // Reset form
                    situation: '',
                    gutFeeling: '',
                    feelingStrength: 5,
                    analysis: null,
                    quietingExercise: false
                });

                alert('🎯 Intuition recorded! Follow up later to track how it played out.');
            });
        }
    },

    startBreathingExercise() {
        // Simple visual breathing guide
        const instruction = document.querySelector('#breathing-instruction');
        if (!instruction) return;

        let phase = 0; // 0: inhale, 1: hold, 2: exhale
        const phases = ['Inhale for 4...', 'Hold for 4...', 'Exhale for 6...'];
        const durations = [4000, 4000, 6000];

        const cycle = () => {
            instruction.textContent = phases[phase];
            setTimeout(() => {
                phase = (phase + 1) % 3;
                if (document.querySelector('#breathing-instruction')) {
                    cycle();
                }
            }, durations[phase]);
        };

        cycle();
    },

    amplifyIntuition(gutFeeling, strength, situation) {
        // Measure feeling strength (amplified by confidence factor)
        const signal = Math.min(100, strength * 10);
        const noise = this.identifyMentalNoise(gutFeeling, situation);

        const amplified = Math.min(100, signal * (strength / 5)); // Confidence factor
        const filtered = Math.max(0, amplified - noise);

        // Find supporting evidence (subconscious patterns)
        const supportingEvidence = this.findSupportingEvidence(gutFeeling, situation);

        // Find contradicting evidence (conscious doubts)
        const contradictingEvidence = this.findContradictingEvidence(gutFeeling, situation);

        // Calculate trust score
        const supportWeight = supportingEvidence.length * 20;
        const contradictWeight = contradictingEvidence.length * 15;
        const trustScore = Math.max(0, Math.min(100,
            filtered + supportWeight - contradictWeight
        ));

        // Generate amplified intuition message
        const amplifiedIntuition = this.generateAmplifiedMessage(gutFeeling, trustScore, supportingEvidence);
        const recommendedAction = this.generateRecommendedAction(trustScore, gutFeeling);

        return {
            signal: Math.round(signal),
            noise: Math.round(noise),
            amplified: Math.round(amplified),
            filtered: Math.round(filtered),
            supportingEvidence,
            contradictingEvidence,
            trustScore: Math.round(trustScore),
            amplifiedIntuition,
            recommendedAction
        };
    },

    identifyMentalNoise(gutFeeling, situation) {
        let noise = 20; // Base noise level

        const noiseTriggers = [
            { pattern: /should|must|have to/i, increase: 15 },
            { pattern: /everyone|always|never/i, increase: 10 },
            { pattern: /what will.*think/i, increase: 20 },
            { pattern: /but.*said|told me/i, increase: 15 },
            { pattern: /logical|rational|makes sense/i, increase: 10 }
        ];

        const combinedText = `${gutFeeling} ${situation}`.toLowerCase();

        noiseTriggers.forEach(trigger => {
            if (trigger.pattern.test(combinedText)) {
                noise += trigger.increase;
            }
        });

        return Math.min(80, noise);
    },

    findSupportingEvidence(gutFeeling, situation) {
        const evidence = [];
        const combinedText = `${gutFeeling} ${situation}`.toLowerCase();

        if (combinedText.includes('feel') || combinedText.includes('sense')) {
            evidence.push('Strong bodily sensations are often reliable indicators');
        }

        if (combinedText.includes('similar') || combinedText.includes('before')) {
            evidence.push('Pattern recognition from past experiences');
        }

        if (combinedText.includes('something') && (combinedText.includes('off') || combinedText.includes('wrong'))) {
            evidence.push('Subconscious detection of inconsistencies');
        }

        if (combinedText.includes('excited') || combinedText.includes('energized') || combinedText.includes('right')) {
            evidence.push('Positive somatic markers indicating alignment');
        }

        if (gutFeeling.length > 20) {
            evidence.push('Detailed intuitive impressions suggest deeper processing');
        }

        // Always provide at least one piece of supporting evidence
        if (evidence.length === 0) {
            evidence.push('Your body-mind system is constantly processing subtle information');
        }

        return evidence;
    },

    findContradictingEvidence(gutFeeling, situation) {
        const doubts = [];
        const combinedText = `${gutFeeling} ${situation}`.toLowerCase();

        if (combinedText.includes('but') && (combinedText.includes('logical') || combinedText.includes('rational'))) {
            doubts.push('Overthinking may be overriding intuitive wisdom');
        }

        if (combinedText.includes('what will') || combinedText.includes('people think')) {
            doubts.push('Social expectations might be clouding authentic feelings');
        }

        if (combinedText.includes('supposed to') || combinedText.includes('should')) {
            doubts.push('External obligations may conflict with inner guidance');
        }

        if (combinedText.includes('crazy') || combinedText.includes('silly') || combinedText.includes('stupid')) {
            doubts.push('Self-judgment is dismissing valuable inner information');
        }

        return doubts;
    },

    generateAmplifiedMessage(gutFeeling, trustScore, supportingEvidence) {
        if (trustScore >= 80) {
            return `Your intuition is speaking clearly and deserves serious attention. The feeling you described carries wisdom from your deeper knowing.`;
        } else if (trustScore >= 60) {
            return `There's valuable guidance in your gut feeling, though it may be mixed with some mental noise. Trust the core sensation while questioning the stories around it.`;
        } else if (trustScore >= 40) {
            return `Your intuition has something to tell you, but it's competing with mental chatter. Take time to get quiet and feel into the deeper truth.`;
        } else {
            return `Your gut feeling may be influenced by fears, expectations, or old patterns. Practice discernment between authentic intuition and reactive emotions.`;
        }
    },

    generateRecommendedAction(trustScore, gutFeeling) {
        if (trustScore >= 80) {
            return 'Trust this intuition and act on it. Your inner wisdom is clear.';
        } else if (trustScore >= 60) {
            return 'Pay attention to this feeling. Gather a bit more information, but don\'t overthink it.';
        } else if (trustScore >= 40) {
            return 'Take some quiet time to feel deeper. What remains when you strip away the mental chatter?';
        } else {
            return 'Practice discernment. Is this intuition or reactivity? Seek clarity through stillness.';
        }
    },

    getTrustInterpretation(score) {
        if (score >= 80) return 'Highly Trustworthy - Act on this guidance';
        if (score >= 60) return 'Trustworthy - Pay close attention';
        if (score >= 40) return 'Mixed Signals - Seek more clarity';
        return 'Low Confidence - Practice discernment';
    },

    updateIntuitionOutcome(index, outcome) {
        // This would be called from inline onclick handlers in the template
        // For now, this is a placeholder for the functionality
        console.log(`Update intuition ${index} with outcome: ${outcome}`);
    },

    help() {
        return `
            <ul>
                <li>Describe your situation and gut feeling honestly</li>
                <li>Rate the strength of your intuitive sense (1-10)</li>
                <li>Begin with the quieting exercise to reduce mental noise</li>
                <li>Review the amplified analysis of your intuition</li>
                <li>Pay attention to the signal-to-noise ratio</li>
                <li>Record your intuitions to track accuracy over time</li>
                <li>Trust grows through validation - follow up on your recorded intuitions</li>
            </ul>
        `;
    }
};
