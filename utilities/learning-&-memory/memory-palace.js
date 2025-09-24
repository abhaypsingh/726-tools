// Memory Palace - Enhanced implementation from pseudocode
export default {
    init() {
        return {
            input: '',
            results: null,
            history: JSON.parse(localStorage.getItem('memory-palace-history') || '[]'),
            settings: JSON.parse(localStorage.getItem('memory-palace-settings') || '{}')
        };
    },

    render(container, state, setState) {
        container.innerHTML = `
            <div class="utility-workspace">
                <h2>Memory Palace</h2>
                <p>Build spatial memory systems for better recall</p>

                <div class="card" style="margin: 20px 0;">
                    <h3>Input</h3>
                    <div class="form-group">
                        <label class="label">Items to remember (comma-separated):</label>
                        <textarea
                            class="textarea"
                            id="main-input"
                            placeholder="milk, eggs, bread, apples"
                            style="min-height: 100px;"
                        >${state.input}</textarea>
                    </div>

                    <button class="btn btn-primary" id="process-btn">
                        Process
                    </button>
                </div>

                ${state.results ? `
                    <div class="card" style="margin: 20px 0;">
                        <h3>Results</h3>
                        ${this.renderResults(state.results)}
                    </div>
                ` : ''}

                <div class="card">
                    <h3>History</h3>
                    ${state.history.length === 0 ? `
                        <p style="color: var(--color-neutral-500);">No history yet</p>
                    ` : `
                        <div class="history-list">
                            ${state.history.slice(-5).reverse().map(item => `
                                <div style="padding: 10px; background: var(--color-neutral-100); border-radius: 8px; margin: 5px 0;">
                                    <div style="display: flex; justify-content: space-between;">
                                        <strong>${item.input}</strong>
                                        <small>${new Date(item.timestamp).toLocaleString()}</small>
                                    </div>
                                    <div style="margin-top: 5px; color: var(--color-primary);">
                                        ${item.summary}
                                    </div>
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
        const input = container.querySelector('#main-input');
        const processBtn = container.querySelector('#process-btn');

        if (input) {
            input.addEventListener('input', (e) => {
                setState({ input: e.target.value });
            });
        }

        if (processBtn) {
            processBtn.addEventListener('click', () => {
                if (state.input) {
                    const results = this.process(state.input);

                    const historyItem = {
                        input: state.input.substring(0, 50) + (state.input.length > 50 ? '...' : ''),
                        summary: results.summary,
                        timestamp: Date.now()
                    };

                    const newHistory = [...state.history, historyItem];
                    if (newHistory.length > 50) newHistory.shift();

                    localStorage.setItem('memory-palace-history', JSON.stringify(newHistory));
                    setState({
                        results: results,
                        history: newHistory
                    });
                }
            });
        }
    },

    
    process(input) {
        const items = input.split(',').map(i => i.trim());

        // Create palace structure
        const rooms = ['Entrance', 'Living Room', 'Kitchen', 'Bedroom', 'Study'];
        const palace = {};

        items.forEach((item, index) => {
            const room = rooms[index % rooms.length];
            const location = this.getLocation(index);
            const image = this.createVividImage(item);

            if (!palace[room]) palace[room] = [];
            palace[room].push({
                item: item,
                location: location,
                image: image,
                association: this.createAssociation(item, location)
            });
        });

        return {
            palace: palace,
            totalItems: items.length,
            rooms: Object.keys(palace),
            walkthrough: this.generateWalkthrough(palace),
            memoryTips: [
                'Visualize walking through your palace',
                'Make images bizarre and memorable',
                'Link items to specific locations',
                'Practice the journey regularly'
            ],
            summary: `Created memory palace with ${items.length} items in ${Object.keys(palace).length} rooms`
        };
    },

    getLocation(index) {
        const locations = ['by the door', 'on the table', 'hanging from ceiling', 'in the corner', 'on the floor'];
        return locations[index % locations.length];
    },

    createVividImage(item) {
        return `A giant, glowing ${item}`;
    },

    createAssociation(item, location) {
        return `The ${item} is ${location}, doing something unusual`;
    },

    generateWalkthrough(palace) {
        const steps = [];
        Object.entries(palace).forEach(([room, items]) => {
            items.forEach(item => {
                steps.push(`In the ${room}, ${item.association}`);
            });
        });
        return steps;
    },

    renderResults(results) {
        let html = '<div style="display: grid; gap: 15px;">';

        Object.entries(results).forEach(([key, value]) => {
            if (key === 'summary') return;

            html += `<div>
                <strong>${this.formatKey(key)}:</strong>
                ${this.formatValue(value)}
            </div>`;
        });

        html += '</div>';
        return html;
    },

    formatKey(key) {
        return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    },

    formatValue(value) {
        if (Array.isArray(value)) {
            return '<ul>' + value.map(v => `<li>${v}</li>`).join('') + '</ul>';
        }
        if (typeof value === 'object') {
            return '<pre>' + JSON.stringify(value, null, 2) + '</pre>';
        }
        return value;
    },

    help() {
        return `
            <ul>
                <li>Create vivid spatial memory associations</li>
                <li>Enter your input and click Process</li>
                <li>View detailed results and analysis</li>
                <li>History is saved locally</li>
            </ul>
        `;
    }
};