const fs = require('fs');
const path = require('path');

// Get all existing utility files
function getAllUtilityFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            files.push(...getAllUtilityFiles(fullPath));
        } else if (item.endsWith('.js')) {
            const id = item.replace('.js', '');
            files.push(id);
        }
    }

    return files;
}

// Read registry
const registry = JSON.parse(fs.readFileSync('./js/registry.js', 'utf8').replace('export const UtilityRegistry = ', '').replace('export default UtilityRegistry;', ''));

const existingFiles = getAllUtilityFiles('./utilities');
const registryIds = registry.utilities.map(u => u.id);

const missing = registryIds.filter(id => !existingFiles.includes(id));

console.log('Missing utility files:');
missing.forEach(id => console.log(id));
console.log('Total missing:', missing.length);

// Also find extras
const extra = existingFiles.filter(id => !registryIds.includes(id));
console.log('\nExtra files not in registry:');
extra.forEach(id => console.log(id));
console.log('Total extra:', extra.length);