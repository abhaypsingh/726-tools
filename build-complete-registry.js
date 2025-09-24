const fs = require('fs');
const path = require('path');

// Build complete registry from all utility files
function buildCompleteRegistry() {
    const utilitiesDir = path.join(__dirname, 'utilities');
    const utilities = [];

    // Function to recursively find all JS files
    function findUtilities(dir) {
        const items = fs.readdirSync(dir);

        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                findUtilities(fullPath);
            } else if (item.endsWith('.js')) {
                const categoryMatch = dir.match(/utilities[\\\/]([^\\\/]+)$/);
                const category = categoryMatch ? categoryMatch[1] : 'uncategorized';
                const id = item.replace('.js', '');

                // Determine complexity based on category and name
                let complexity = 'medium';
                if (id.includes('simple') || id.includes('basic') || category === 'fun-&-games') {
                    complexity = 'simple';
                } else if (id.includes('advanced') || id.includes('ai-') || category === 'technology-&-programming') {
                    complexity = 'advanced';
                }

                // Generate name from ID
                const name = id.split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');

                // Generate description based on name and category
                const description = generateDescription(name, category);

                utilities.push({
                    id,
                    name,
                    category,
                    description,
                    complexity
                });
            }
        }
    }

    function generateDescription(name, category) {
        const descriptions = {
            'thinking-&-planning': `${name} for enhanced cognitive planning`,
            'learning-&-memory': `${name} to improve learning effectiveness`,
            'emotions-&-wellness': `${name} for emotional wellbeing`,
            'productivity-&-focus': `${name} to boost productivity`,
            'relationships-&-social': `${name} for better relationships`,
            'writing-&-language': `${name} for enhanced communication`,
            'math-&-logic': `${name} for mathematical analysis`,
            'visual-&-design': `${name} for visual creativity`,
            'food-&-cooking': `${name} for culinary excellence`,
            'health-&-fitness': `${name} for health optimization`,
            'travel-&-adventure': `${name} for travel planning`,
            'audio-&-sound': `${name} for audio processing`,
            'productivity-tools': `${name} for workflow optimization`,
            'privacy-&-security': `${name} for digital security`,
            'finance-&-money': `${name} for financial management`,
            'home-&-lifestyle': `${name} for lifestyle improvement`,
            'personal-development': `${name} for personal growth`,
            'life-management': `${name} for life organization`,
            'fun-&-games': `${name} for entertainment`,
            'business-&-entrepreneurship': `${name} for business success`,
            'science-&-nature': `${name} for scientific exploration`,
            'technology-&-programming': `${name} for technical development`,
            'entertainment-&-media': `${name} for media enjoyment`
        };

        return descriptions[category] || `${name} utility`;
    }

    findUtilities(utilitiesDir);

    // Sort utilities by category and then by name
    utilities.sort((a, b) => {
        if (a.category !== b.category) {
            return a.category.localeCompare(b.category);
        }
        return a.name.localeCompare(b.name);
    });

    return utilities;
}

// Generate the registry file
const utilities = buildCompleteRegistry();

// Group by category for organized output
const categorized = {};
utilities.forEach(utility => {
    if (!categorized[utility.category]) {
        categorized[utility.category] = [];
    }
    categorized[utility.category].push(utility);
});

// Count utilities per category
console.log('Utilities per category:');
Object.entries(categorized).forEach(([category, utils]) => {
    console.log(`${category}: ${utils.length} utilities`);
});

console.log(`\\nTotal utilities: ${utilities.length}`);

// Generate the registry content
const registryContent = `// Complete Registry of all ${utilities.length} Utilities
export const UtilityRegistry = {
    utilities: [
${Object.entries(categorized).map(([category, categoryUtilities]) => {
    const categoryComment = `        // ${category.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' & ')} (${categoryUtilities.length} utilities)`;

    const utilitiesString = categoryUtilities.map(utility =>
        `        { id: '${utility.id}', name: '${utility.name}', category: '${utility.category}', description: '${utility.description}', complexity: '${utility.complexity}' }`
    ).join(',\\n');

    return categoryComment + '\\n' + utilitiesString;
}).join(',\\n\\n')}
    ],

    getByCategory(category) {
        return this.utilities.filter(u => u.category === category);
    },

    search(query) {
        const q = query.toLowerCase();
        return this.utilities.filter(u =>
            u.name.toLowerCase().includes(q) ||
            u.description.toLowerCase().includes(q)
        );
    },

    getById(id) {
        return this.utilities.find(u => u.id === id);
    },

    getCategories() {
        return [...new Set(this.utilities.map(u => u.category))];
    },

    getComplexityLevels() {
        return ['simple', 'medium', 'advanced'];
    },

    getByComplexity(complexity) {
        return this.utilities.filter(u => u.complexity === complexity);
    },

    getStats() {
        return {
            total: this.utilities.length,
            categories: this.getCategories().length,
            byComplexity: {
                simple: this.getByComplexity('simple').length,
                medium: this.getByComplexity('medium').length,
                advanced: this.getByComplexity('advanced').length
            }
        };
    }
};

// Export for use in app
export default UtilityRegistry;`;

// Write the new registry
fs.writeFileSync(path.join(__dirname, 'js', 'registry.js'), registryContent);
fs.writeFileSync(path.join(__dirname, 'js', 'registry-complete.js'), registryContent);

console.log('\\nRegistry files updated successfully!');
console.log(`- js/registry.js (${utilities.length} utilities)`);
console.log(`- js/registry-complete.js (${utilities.length} utilities)`);