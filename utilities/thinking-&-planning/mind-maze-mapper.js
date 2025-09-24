// Mind Maze Mapper - Navigate mental labyrinths to find clarity
export default {
    init() {
        return {
            thoughtPattern: '',
            currentPosition: 'starting_thought',
            pathHistory: [],
            deadEnds: [],
            insights: [],
            maze: null,
            solutionPath: [],
            clarity: 0,
            history: JSON.parse(localStorage.getItem('mind-maze-mapper-history') || '[]')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>🧠 Mind Maze Mapper</h2>
                <p>Navigate the mental labyrinth of complex thoughts to find clarity and solutions</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>Enter Your Mental Maze</h3>
                    <div class="form-group">
                        <label class="label">What thought pattern has you confused or stuck?</label>
                        <textarea
                            class="textarea"
                            id="thought-input"
                            placeholder="I keep going in circles thinking about whether I should change careers... I think about the risks, then the benefits, then back to the risks..."
                            style="min-height: 120px;"
                        >${state.thoughtPattern}</textarea>
                    </div>

                    <button class="btn btn-primary" id="map-maze-btn" style="width: 100%;">
                        🗺️ Map the Mental Maze
                    </button>
                </div>

                ${state.maze ? `
                    <div class="card" style="margin: 20px 0; border: 2px solid var(--color-primary);">
                        <h3>Your Mental Maze</h3>
                        <div style="display: grid; gap: 15px;">
                            <div>
                                <h4>Current Position: ${state.currentPosition}</h4>
                                <div class="progress-bar" style="background: var(--color-neutral-200); height: 10px; border-radius: 5px;">
                                    <div style="background: var(--color-primary); height: 100%; width: ${state.clarity}%; border-radius: 5px; transition: width 0.5s;"></div>
                                </div>
                                <small>Clarity: ${state.clarity}%</small>
                            </div>

                            <div>
                                <h4>Available Paths:</h4>
                                <div style="display: grid; gap: 10px;">
                                    ${state.maze.availablePaths.map((path, i) => `
                                        <button class="btn btn-secondary path-btn" data-path="${i}" style="text-align: left;">
                                            🛤️ ${path.description}
                                            <br><small style="opacity: 0.7;">Clarity gain: +${path.clarityGain}%</small>
                                        </button>
                                    `).join('')}
                                </div>
                            </div>

                            ${state.insights.length > 0 ? `
                                <div>
                                    <h4>💡 Insights Discovered:</h4>
                                    <div style="display: grid; gap: 8px;">
                                        ${state.insights.map(insight => `
                                            <div style="padding: 12px; background: linear-gradient(135deg, #fff3cd, #ffeaa7); border-left: 4px solid #f39c12; border-radius: 6px;">
                                                <strong>${insight.title}</strong>
                                                <p style="margin: 5px 0 0 0;">${insight.description}</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            ` : ''}

                            ${state.deadEnds.length > 0 ? `
                                <div>
                                    <h4>🚫 Dead Ends Identified:</h4>
                                    <ul>
                                        ${state.deadEnds.map(deadEnd => `
                                            <li style="margin: 5px 0;">${deadEnd}</li>
                                        `).join('')}
                                    </ul>
                                </div>
                            ` : ''}

                            ${state.clarity >= 80 ? `
                                <div class="card" style="border: 2px solid var(--color-success); background: linear-gradient(135deg, #d4edda, #c3e6cb);">
                                    <h3>🎉 Solution Found!</h3>
                                    <div>
                                        <h4>Path to Clarity:</h4>
                                        <ol>
                                            ${state.solutionPath.map(step => `
                                                <li>${step}</li>
                                            `).join('')}
                                        </ol>
                                    </div>
                                    <button class="btn btn-success" id="save-solution-btn">
                                        💾 Save This Solution
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                ` : ''}

                ${state.pathHistory.length > 0 ? `
                    <div class="card">
                        <h3>Path History</h3>
                        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                            ${state.pathHistory.map((step, i) => `
                                <div style="display: flex; align-items: center;">
                                    <div class="badge badge-neutral">${step}</div>
                                    ${i < state.pathHistory.length - 1 ? '<span>→</span>' : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${state.history.length > 0 ? `
                    <div class="card">
                        <h3>Previous Mazes Solved</h3>
                        <div style="display: grid; gap: 10px;">
                            ${state.history.slice(-3).reverse().map(item => `
                                <div style="padding: 10px; background: var(--color-neutral-100); border-radius: 8px;">
                                    <div style="display: flex; justify-content: space-between; align-items: start;">
                                        <div>
                                            <strong>"${item.thoughtPattern.substring(0, 60)}..."</strong>
                                            <div style="margin-top: 5px;">
                                                <span class="badge badge-success">Clarity: ${item.finalClarity}%</span>
                                                <span class="badge badge-neutral">${item.steps} steps</span>
                                            </div>
                                        </div>
                                        <small>${new Date(item.date).toLocaleDateString()}</small>
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
        const thoughtInput = container.querySelector('#thought-input');
        if (thoughtInput) {
            thoughtInput.addEventListener('input', (e) => {
                setState({ thoughtPattern: e.target.value });
            });
        }

        const mapBtn = container.querySelector('#map-maze-btn');
        if (mapBtn) {
            mapBtn.addEventListener('click', () => {
                if (state.thoughtPattern) {
                    const maze = this.createMentalLabyrinth(state.thoughtPattern);
                    setState({
                        maze,
                        currentPosition: 'confused_state',
                        clarity: 10,
                        pathHistory: ['Starting Point'],
                        deadEnds: [],
                        insights: [],
                        solutionPath: []
                    });
                }
            });
        }

        // Path navigation buttons
        container.querySelectorAll('.path-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const pathIndex = parseInt(e.currentTarget.dataset.path);
                this.navigatePath(state, setState, pathIndex);
            });
        });

        const saveSolutionBtn = container.querySelector('#save-solution-btn');
        if (saveSolutionBtn) {
            saveSolutionBtn.addEventListener('click', () => {
                const newHistory = [...state.history, {
                    thoughtPattern: state.thoughtPattern,
                    finalClarity: state.clarity,
                    steps: state.pathHistory.length,
                    insights: state.insights.length,
                    date: Date.now()
                }];
                localStorage.setItem('mind-maze-mapper-history', JSON.stringify(newHistory));
                setState({ history: newHistory });
                alert('🎉 Solution saved! You\'ve successfully navigated this mental maze.');
            });
        }
    },

    createMentalLabyrinth(thoughtPattern) {
        // Analyze the thought pattern to create maze structure
        const thoughts = this.extractThoughts(thoughtPattern);
        const obstacles = this.identifyObstacles(thoughtPattern);

        return {
            layout: this.generateMazeLayout(thoughts),
            availablePaths: this.generateAvailablePaths(thoughts, obstacles),
            obstacles: obstacles,
            exits: this.findPotentialExits(thoughts)
        };
    },

    extractThoughts(pattern) {
        // Extract key thoughts and concerns
        const sentences = pattern.split(/[.!?]+/).filter(s => s.trim().length > 0);
        return sentences.map(s => ({
            content: s.trim(),
            type: this.classifyThought(s),
            complexity: this.calculateComplexity(s)
        }));
    },

    classifyThought(thought) {
        const lower = thought.toLowerCase();
        if (lower.includes('worry') || lower.includes('scared') || lower.includes('afraid')) {
            return 'fear';
        } else if (lower.includes('but') || lower.includes('however') || lower.includes('although')) {
            return 'contradiction';
        } else if (lower.includes('should') || lower.includes('must') || lower.includes('have to')) {
            return 'obligation';
        } else if (lower.includes('want') || lower.includes('wish') || lower.includes('hope')) {
            return 'desire';
        }
        return 'neutral';
    },

    calculateComplexity(thought) {
        const complexWords = thought.match(/\b\w{7,}\b/g) || [];
        const conditionals = thought.match(/\b(if|when|unless|although|while)\b/gi) || [];
        return Math.min(10, complexWords.length + conditionals.length * 2);
    },

    identifyObstacles(pattern) {
        const obstacles = [];
        if (pattern.includes('can\'t') || pattern.includes('impossible')) {
            obstacles.push('Limiting beliefs');
        }
        if (pattern.includes('what if') || pattern.includes('but what')) {
            obstacles.push('Catastrophic thinking');
        }
        if (pattern.includes('always') || pattern.includes('never')) {
            obstacles.push('Black-and-white thinking');
        }
        if (pattern.includes('everyone') || pattern.includes('nobody')) {
            obstacles.push('Overgeneralization');
        }
        return obstacles;
    },

    generateMazeLayout(thoughts) {
        return {
            entrance: 'Current confusion',
            chambers: thoughts.map(t => t.content.substring(0, 30) + '...'),
            connections: this.findConnections(thoughts),
            exit: 'Clear understanding'
        };
    },

    generateAvailablePaths(thoughts, obstacles) {
        const paths = [
            {
                description: 'Question the assumptions behind this thinking',
                clarityGain: 15,
                consequence: 'Identifies hidden beliefs',
                deadEnd: false
            },
            {
                description: 'Look for evidence supporting each side',
                clarityGain: 20,
                consequence: 'Balances perspective',
                deadEnd: false
            },
            {
                description: 'Consider what advice you\'d give a friend',
                clarityGain: 18,
                consequence: 'Gains objective viewpoint',
                deadEnd: false
            }
        ];

        // Add obstacle-specific paths
        if (obstacles.includes('Catastrophic thinking')) {
            paths.push({
                description: 'Challenge the "what if" scenarios',
                clarityGain: 25,
                consequence: 'Reduces anxiety spiral',
                deadEnd: false
            });
        }

        if (obstacles.includes('Black-and-white thinking')) {
            paths.push({
                description: 'Explore the middle ground options',
                clarityGain: 22,
                consequence: 'Reveals nuanced solutions',
                deadEnd: false
            });
        }

        // Add some dead-end paths for realism
        paths.push({
            description: 'Keep overthinking the same thoughts',
            clarityGain: -5,
            consequence: 'Increases confusion',
            deadEnd: true
        });

        return paths;
    },

    findPotentialExits(thoughts) {
        return [
            'Accept uncertainty and focus on what you can control',
            'Make a small test decision to gather more information',
            'Set a decision deadline to prevent endless rumination',
            'Break the big decision into smaller, manageable steps'
        ];
    },

    findConnections(thoughts) {
        const connections = [];
        for (let i = 0; i < thoughts.length - 1; i++) {
            connections.push({
                from: thoughts[i].content.substring(0, 20) + '...',
                to: thoughts[i + 1].content.substring(0, 20) + '...',
                type: 'leads_to'
            });
        }
        return connections;
    },

    navigatePath(state, setState, pathIndex) {
        const path = state.maze.availablePaths[pathIndex];
        const newClarity = Math.max(0, Math.min(100, state.clarity + path.clarityGain));
        const newPosition = path.description;
        const newPathHistory = [...state.pathHistory, path.description.substring(0, 30) + '...'];

        let newDeadEnds = [...state.deadEnds];
        let newInsights = [...state.insights];

        if (path.deadEnd) {
            newDeadEnds.push(path.consequence);
        } else if (path.clarityGain > 15) {
            newInsights.push({
                title: 'New Insight',
                description: path.consequence
            });
        }

        // Generate new paths based on progress
        const newPaths = this.generateNextPaths(newClarity, state.maze.obstacles);

        let solutionPath = [...state.solutionPath];
        if (newClarity >= 80 && state.clarity < 80) {
            solutionPath = this.generateSolutionPath(newPathHistory, newInsights);
        }

        setState({
            currentPosition: newPosition,
            clarity: newClarity,
            pathHistory: newPathHistory,
            deadEnds: newDeadEnds,
            insights: newInsights,
            solutionPath: solutionPath,
            maze: {
                ...state.maze,
                availablePaths: newPaths
            }
        });
    },

    generateNextPaths(clarity, obstacles) {
        if (clarity >= 80) {
            return [{
                description: 'You\'ve found clarity! The maze is solved.',
                clarityGain: 0,
                consequence: 'Complete understanding achieved',
                deadEnd: false
            }];
        }

        const progressPaths = [
            {
                description: 'Examine this from a different time perspective',
                clarityGain: Math.floor(Math.random() * 15) + 10,
                consequence: 'Temporal shift brings new understanding',
                deadEnd: false
            },
            {
                description: 'Consider the deeper values at stake',
                clarityGain: Math.floor(Math.random() * 20) + 15,
                consequence: 'Value alignment creates direction',
                deadEnd: false
            },
            {
                description: 'Look for patterns in similar past decisions',
                clarityGain: Math.floor(Math.random() * 18) + 12,
                consequence: 'Historical perspective provides wisdom',
                deadEnd: false
            }
        ];

        return progressPaths;
    },

    generateSolutionPath(pathHistory, insights) {
        return [
            'Recognized the circular thinking pattern',
            'Identified key obstacles and assumptions',
            ...insights.map(i => i.description),
            'Found the path to clarity through systematic exploration',
            'Can now make decisions from a place of understanding'
        ];
    },

    help() {
        return `
            <ul>
                <li>Enter a thought pattern that has you confused or going in circles</li>
                <li>Navigate through the mental maze by choosing different paths</li>
                <li>Each path offers different perspectives and clarity gains</li>
                <li>Avoid dead ends that increase confusion</li>
                <li>Collect insights as you progress through the maze</li>
                <li>Reach 80% clarity to find the solution path</li>
                <li>Save successful navigation strategies for future use</li>
            </ul>
        `;
    }
};
