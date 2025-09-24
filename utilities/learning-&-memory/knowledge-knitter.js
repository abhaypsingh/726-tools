// Knowledge Knitter - Weave intricate connections between concepts and create knowledge networks
export default {
    init() {
        return {
            concepts: [],
            newConcept: '',
            knowledgeGraph: JSON.parse(localStorage.getItem('knowledge-graph') || '{}'),
            activeConnections: [],
            viewMode: 'network', // 'network', 'list', 'clusters'
            selectedConcept: null,
            history: JSON.parse(localStorage.getItem('knowledge-knitter-history') || '[]')
        };
    },

    render(container, state, setState) {
        const graphStats = this.analyzeGraph(state.knowledgeGraph);

        container.innerHTML = `
            <div class="utility-workspace">
                <h2>🧶 Knowledge Knitter</h2>
                <p>Weave intricate connections between concepts to create your personal knowledge network</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>Add New Concept</h3>
                    <div class="form-group">
                        <label class="label">Enter a concept, idea, or topic:</label>
                        <input
                            type="text"
                            class="input"
                            id="concept-input"
                            placeholder="Machine Learning, Photosynthesis, Roman History..."
                            value="${state.newConcept}"
                        />
                    </div>
                    <button class="btn btn-primary" id="add-concept-btn" style="width: 100%;">
                        🧵 Add to Knowledge Web
                    </button>
                </div>

                ${Object.keys(state.knowledgeGraph).length > 0 ? `
                    <div class="card" style="margin: 20px 0;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                            <h3>Knowledge Network</h3>
                            <div style="display: flex; gap: 10px;">
                                <button class="btn ${state.viewMode === 'network' ? 'btn-primary' : 'btn-secondary'}" id="network-view-btn">
                                    🕸️ Network
                                </button>
                                <button class="btn ${state.viewMode === 'clusters' ? 'btn-primary' : 'btn-secondary'}" id="clusters-view-btn">
                                    🏷️ Clusters
                                </button>
                                <button class="btn ${state.viewMode === 'list' ? 'btn-primary' : 'btn-secondary'}" id="list-view-btn">
                                    📋 List
                                </button>
                            </div>
                        </div>

                        ${this.renderKnowledgeView(state)}
                    </div>
                ` : `
                    <div class="card" style="text-align: center; padding: 40px; background: linear-gradient(135deg, #f8f9fa, #e9ecef);">
                        <h3>🌱 Start Your Knowledge Garden</h3>
                        <p style="color: var(--color-neutral-600); margin: 15px 0;">
                            Add your first concept to begin weaving your knowledge network
                        </p>
                    </div>
                `}

                ${Object.keys(state.knowledgeGraph).length > 0 ? `
                    <div class="card" style="background: linear-gradient(135deg, #e8f4f8, #f0f8ff);">
                        <h3>📊 Network Statistics</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 15px; margin: 15px 0;">
                            <div style="text-align: center;">
                                <div style="font-size: 1.8rem; font-weight: bold; color: var(--color-primary);">
                                    ${graphStats.totalConcepts}
                                </div>
                                <div>Total Concepts</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 1.8rem; font-weight: bold; color: var(--color-success);">
                                    ${graphStats.totalConnections}
                                </div>
                                <div>Connections</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 1.8rem; font-weight: bold; color: var(--color-warning);">
                                    ${graphStats.clusters}
                                </div>
                                <div>Knowledge Clusters</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 1.8rem; font-weight: bold; color: var(--color-neutral-600);">
                                    ${graphStats.density}%
                                </div>
                                <div>Network Density</div>
                            </div>
                        </div>
                    </div>
                ` : ''}

                <div class="card" style="background: linear-gradient(135deg, #e8f5e8, #f0f8f0);">
                    <h3>🎯 Knowledge Weaving Tips</h3>
                    <div style="display: grid; gap: 10px; margin: 15px 0;">
                        <div>💡 <strong>Think Broadly:</strong> Include concepts from different domains for richer connections</div>
                        <div>🔗 <strong>Find Links:</strong> Look for unexpected relationships between seemingly unrelated ideas</div>
                        <div>🌐 <strong>Build Bridges:</strong> Connect new learning to existing knowledge</div>
                        <div>🔍 <strong>Explore Patterns:</strong> Notice recurring themes across different subjects</div>
                    </div>
                </div>
            </div>
        `;

        this.setupEventListeners(container, state, setState);
    },

    renderKnowledgeView(state) {
        switch (state.viewMode) {
            case 'network':
                return this.renderNetworkView(state);
            case 'clusters':
                return this.renderClustersView(state);
            case 'list':
                return this.renderListView(state);
            default:
                return this.renderNetworkView(state);
        }
    },

    renderNetworkView(state) {
        const concepts = Object.keys(state.knowledgeGraph);

        return `
            <div style="background: var(--color-neutral-50); border-radius: 8px; padding: 20px;">
                <div style="display: grid; gap: 15px;">
                    ${concepts.map(concept => `
                        <div class="card concept-node" data-concept="${concept}" style="cursor: pointer; transition: all 0.3s ease; ${state.selectedConcept === concept ? 'border: 2px solid var(--color-primary); transform: scale(1.02);' : ''}">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <div style="flex: 1;">
                                    <h4 style="color: var(--color-primary); margin-bottom: 8px;">${concept}</h4>
                                    <div style="margin-bottom: 10px;">
                                        <span class="badge badge-neutral">
                                            ${state.knowledgeGraph[concept].connections.length} connections
                                        </span>
                                        <span class="badge badge-secondary">
                                            ${state.knowledgeGraph[concept].strength} strength
                                        </span>
                                    </div>
                                    ${state.knowledgeGraph[concept].connections.length > 0 ? `
                                        <div style="font-size: 0.9rem; color: var(--color-neutral-600);">
                                            <strong>Connected to:</strong> ${state.knowledgeGraph[concept].connections.slice(0, 3).map(c => c.target).join(', ')}${state.knowledgeGraph[concept].connections.length > 3 ? '...' : ''}
                                        </div>
                                    ` : ''}
                                </div>
                                <div style="display: flex; gap: 5px;">
                                    <button class="btn btn-small btn-success" data-connect="${concept}">🔗</button>
                                    <button class="btn btn-small btn-error" data-delete="${concept}">×</button>
                                </div>
                            </div>
                            ${state.selectedConcept === concept ? `
                                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--color-neutral-200);">
                                    <strong>All Connections:</strong>
                                    <div style="display: grid; gap: 5px; margin-top: 8px;">
                                        ${state.knowledgeGraph[concept].connections.map(conn => `
                                            <div style="font-size: 0.8rem; color: var(--color-neutral-700);">
                                                → <strong>${conn.target}</strong> <em>(${conn.type})</em>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    renderClustersView(state) {
        const clusters = this.identifyKnowledgeClusters(state.knowledgeGraph);

        return `
            <div style="display: grid; gap: 20px;">
                ${Object.entries(clusters).map(([clusterName, concepts]) => `
                    <div class="card" style="background: linear-gradient(135deg, var(--color-neutral-50), var(--color-neutral-100));">
                        <h4 style="color: var(--color-primary); margin-bottom: 15px;">
                            🏷️ ${clusterName} Cluster (${concepts.length} concepts)
                        </h4>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            ${concepts.map(concept => `
                                <span class="badge badge-primary concept-tag" data-concept="${concept}">
                                    ${concept}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderListView(state) {
        const concepts = Object.keys(state.knowledgeGraph).sort();

        return `
            <div style="display: grid; gap: 8px;">
                ${concepts.map(concept => `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: var(--color-neutral-100); border-radius: 6px;">
                        <div>
                            <strong>${concept}</strong>
                            <span style="margin-left: 10px; color: var(--color-neutral-600); font-size: 0.9rem;">
                                ${state.knowledgeGraph[concept].connections.length} connections
                            </span>
                        </div>
                        <div style="display: flex; gap: 5px;">
                            <button class="btn btn-small btn-success" data-connect="${concept}">🔗</button>
                            <button class="btn btn-small btn-error" data-delete="${concept}">×</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    setupEventListeners(container, state, setState) {
        const conceptInput = container.querySelector('#concept-input');
        if (conceptInput) {
            conceptInput.addEventListener('input', (e) => {
                setState({ newConcept: e.target.value });
            });

            conceptInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.addConcept(state, setState);
                }
            });
        }

        const addConceptBtn = container.querySelector('#add-concept-btn');
        if (addConceptBtn) {
            addConceptBtn.addEventListener('click', () => {
                this.addConcept(state, setState);
            });
        }

        // View mode buttons
        const networkViewBtn = container.querySelector('#network-view-btn');
        if (networkViewBtn) {
            networkViewBtn.addEventListener('click', () => {
                setState({ viewMode: 'network' });
            });
        }

        const clustersViewBtn = container.querySelector('#clusters-view-btn');
        if (clustersViewBtn) {
            clustersViewBtn.addEventListener('click', () => {
                setState({ viewMode: 'clusters' });
            });
        }

        const listViewBtn = container.querySelector('#list-view-btn');
        if (listViewBtn) {
            listViewBtn.addEventListener('click', () => {
                setState({ viewMode: 'list' });
            });
        }

        // Concept interaction buttons
        container.querySelectorAll('[data-connect]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const concept = e.target.dataset.connect;
                this.connectConcept(concept, state, setState);
            });
        });

        container.querySelectorAll('[data-delete]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const concept = e.target.dataset.delete;
                this.deleteConcept(concept, state, setState);
            });
        });

        // Concept selection
        container.querySelectorAll('.concept-node').forEach(node => {
            node.addEventListener('click', (e) => {
                if (!e.target.matches('button')) {
                    const concept = e.currentTarget.dataset.concept;
                    setState({
                        selectedConcept: state.selectedConcept === concept ? null : concept
                    });
                }
            });
        });

        container.querySelectorAll('.concept-tag').forEach(tag => {
            tag.addEventListener('click', (e) => {
                const concept = e.target.dataset.concept;
                setState({ selectedConcept: concept, viewMode: 'network' });
            });
        });
    },

    addConcept(state, setState) {
        if (!state.newConcept.trim()) {
            alert('Please enter a concept');
            return;
        }

        const concept = state.newConcept.trim();

        if (state.knowledgeGraph[concept]) {
            alert('This concept already exists in your network');
            return;
        }

        // Create concept node
        const newGraph = { ...state.knowledgeGraph };
        newGraph[concept] = {
            connections: [],
            strength: 1,
            dateAdded: Date.now()
        };

        // Auto-connect to related concepts
        const autoConnections = this.findAutoConnections(concept, Object.keys(newGraph));
        autoConnections.forEach(connection => {
            this.createConnection(newGraph, concept, connection.target, connection.type, connection.strength);
        });

        localStorage.setItem('knowledge-graph', JSON.stringify(newGraph));

        setState({
            knowledgeGraph: newGraph,
            newConcept: '',
            selectedConcept: concept
        });

        if (autoConnections.length > 0) {
            alert(`✨ Added "${concept}" and found ${autoConnections.length} automatic connection(s)!`);
        }
    },

    connectConcept(sourceConcept, state, setState) {
        const availableTargets = Object.keys(state.knowledgeGraph)
            .filter(c => c !== sourceConcept &&
                !state.knowledgeGraph[sourceConcept].connections.find(conn => conn.target === c));

        if (availableTargets.length === 0) {
            alert('This concept is already connected to all other concepts');
            return;
        }

        const target = prompt(`Connect "${sourceConcept}" to which concept?\n\nAvailable: ${availableTargets.join(', ')}`);

        if (target && availableTargets.includes(target)) {
            const connectionType = prompt('What type of connection?\n\n1. Related\n2. Causes\n3. Part of\n4. Example of\n5. Opposite\n\nEnter number or custom description:');

            const types = {
                '1': 'related to',
                '2': 'causes',
                '3': 'part of',
                '4': 'example of',
                '5': 'opposite of'
            };

            const finalType = types[connectionType] || connectionType || 'related to';

            const newGraph = { ...state.knowledgeGraph };
            this.createConnection(newGraph, sourceConcept, target, finalType, 3);

            localStorage.setItem('knowledge-graph', JSON.stringify(newGraph));
            setState({ knowledgeGraph: newGraph });

            alert(`✅ Connected "${sourceConcept}" ${finalType} "${target}"`);
        }
    },

    deleteConcept(concept, state, setState) {
        if (confirm(`Delete "${concept}" and all its connections?`)) {
            const newGraph = { ...state.knowledgeGraph };

            // Remove the concept
            delete newGraph[concept];

            // Remove connections to this concept from other nodes
            Object.keys(newGraph).forEach(key => {
                newGraph[key].connections = newGraph[key].connections.filter(conn => conn.target !== concept);
            });

            localStorage.setItem('knowledge-graph', JSON.stringify(newGraph));
            setState({
                knowledgeGraph: newGraph,
                selectedConcept: state.selectedConcept === concept ? null : state.selectedConcept
            });
        }
    },

    findAutoConnections(newConcept, existingConcepts) {
        const connections = [];
        const newConceptLower = newConcept.toLowerCase();

        existingConcepts.forEach(existing => {
            if (existing === newConcept) return;

            const existingLower = existing.toLowerCase();
            const similarity = this.calculateSimilarity(newConceptLower, existingLower);

            if (similarity > 0.3) {
                connections.push({
                    target: existing,
                    type: 'related to',
                    strength: Math.round(similarity * 5)
                });
            }
        });

        return connections.slice(0, 3); // Limit to top 3 connections
    },

    calculateSimilarity(str1, str2) {
        // Simple similarity based on common words and character overlap
        const words1 = str1.split(/\s+/);
        const words2 = str2.split(/\s+/);

        let commonWords = 0;
        words1.forEach(word1 => {
            if (words2.some(word2 => word1.includes(word2) || word2.includes(word1))) {
                commonWords++;
            }
        });

        const wordSimilarity = commonWords / Math.max(words1.length, words2.length);

        // Character-level similarity
        const shorter = str1.length < str2.length ? str1 : str2;
        const longer = str1.length >= str2.length ? str1 : str2;

        let commonChars = 0;
        for (let i = 0; i < shorter.length; i++) {
            if (longer.includes(shorter[i])) commonChars++;
        }

        const charSimilarity = commonChars / longer.length;

        return (wordSimilarity * 0.7) + (charSimilarity * 0.3);
    },

    createConnection(graph, source, target, type, strength) {
        // Add connection from source to target
        graph[source].connections.push({
            target: target,
            type: type,
            strength: strength
        });

        // Add reciprocal connection (with potentially different type)
        const reciprocalType = this.getReciprocalType(type);
        graph[target].connections.push({
            target: source,
            type: reciprocalType,
            strength: strength
        });

        // Increase node strengths
        graph[source].strength += 1;
        graph[target].strength += 1;
    },

    getReciprocalType(type) {
        const reciprocals = {
            'causes': 'caused by',
            'part of': 'contains',
            'example of': 'exemplified by',
            'opposite of': 'opposite of',
            'related to': 'related to'
        };

        return reciprocals[type] || 'related to';
    },

    analyzeGraph(graph) {
        const concepts = Object.keys(graph);
        const totalConcepts = concepts.length;

        if (totalConcepts === 0) {
            return { totalConcepts: 0, totalConnections: 0, clusters: 0, density: 0 };
        }

        const totalConnections = concepts.reduce((sum, concept) =>
            sum + graph[concept].connections.length, 0) / 2; // Divide by 2 since connections are bidirectional

        const maxPossibleConnections = (totalConcepts * (totalConcepts - 1)) / 2;
        const density = maxPossibleConnections > 0 ? Math.round((totalConnections / maxPossibleConnections) * 100) : 0;

        const clusters = Object.keys(this.identifyKnowledgeClusters(graph)).length;

        return {
            totalConcepts,
            totalConnections: Math.round(totalConnections),
            clusters,
            density
        };
    },

    identifyKnowledgeClusters(graph) {
        // Simple clustering based on connection density
        const clusters = {};
        const processed = new Set();

        Object.keys(graph).forEach(concept => {
            if (processed.has(concept)) return;

            // Find the most connected concepts to this one
            const connections = graph[concept].connections.map(c => c.target);
            const clusterName = concept.split(' ')[0]; // Use first word as cluster name

            if (!clusters[clusterName]) {
                clusters[clusterName] = [];
            }

            clusters[clusterName].push(concept);
            processed.add(concept);

            // Add closely connected concepts to the same cluster
            connections.forEach(target => {
                if (!processed.has(target) && graph[target].connections.some(c => c.target === concept)) {
                    clusters[clusterName].push(target);
                    processed.add(target);
                }
            });
        });

        return clusters;
    },

    help() {
        return `
            <ul>
                <li>Add concepts, ideas, or topics to your knowledge network</li>
                <li>Automatic connections will be suggested based on similarity</li>
                <li>Manually connect concepts with specific relationship types</li>
                <li>View your network as a web, clusters, or simple list</li>
                <li>Click on concepts to explore their connections in detail</li>
                <li>Delete concepts or connections that are no longer relevant</li>
                <li>Build a comprehensive map of your learning and understanding</li>
            </ul>
        `;
    }
};