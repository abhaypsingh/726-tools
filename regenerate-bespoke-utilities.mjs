import fs from 'fs';
import path from 'path';
import { UtilityRegistry } from './js/registry.js';
import { analyzeUtilityIntent } from './js/utility-intent-engine.js';

const STOP_WORDS = new Set([
    'and',
    'for',
    'the',
    'tool',
    'tools',
    'plus',
    'pro',
    'smart',
    'advanced',
    'utility'
]);

function categoryToPath(category) {
    return String(category || '')
        .toLowerCase()
        .replace(/\s+/g, '-');
}

function deriveFocusTerms(utility, intent) {
    const idTokens = String(utility.id || '')
        .toLowerCase()
        .split('-');
    const nameTokens = String(utility.name || '')
        .toLowerCase()
        .split(/\s+/);
    const domainTokens = String(intent.domain || '')
        .toLowerCase()
        .split(/\s+/);

    const combined = [...idTokens, ...nameTokens, ...domainTokens]
        .map(token => token.trim())
        .filter(token => token.length > 2 && !STOP_WORDS.has(token))
        .filter((token, index, array) => array.indexOf(token) === index);

    return combined.slice(0, 8);
}

function createModuleSource(metadata) {
    return `import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = ${JSON.stringify(metadata, null, 4)};

export default createBespokeUtility(metadata);
`;
}

const utilities = UtilityRegistry.getAllUtilities();
let generatedCount = 0;

for (const utility of utilities) {
    const intent = analyzeUtilityIntent(utility);
    const metadata = {
        id: utility.id,
        name: utility.name,
        category: utility.category,
        description: utility.description,
        complexity: utility.complexity,
        action: intent.action,
        archetype: intent.archetype,
        domain: intent.domain,
        intent: intent.intent,
        workflow: intent.workflow,
        inputHint: intent.inputHint,
        focusTerms: deriveFocusTerms(utility, intent)
    };

    const categoryPath = categoryToPath(utility.category);
    const filePath = path.join('utilities', categoryPath, `${utility.id}.js`);
    const source = createModuleSource(metadata);
    fs.writeFileSync(filePath, source, 'utf8');
    generatedCount++;
}

console.log(JSON.stringify({
    totalUtilities: utilities.length,
    generatedCount
}, null, 2));

