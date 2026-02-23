import fs from 'fs';
import { UtilityRegistry } from './js/registry.js';
import { analyzeUtilityIntent } from './js/utility-intent-engine.js';

const utilities = UtilityRegistry.getAllUtilities();

function escapeCsv(value) {
    const text = String(value ?? '').replace(/"/g, '""');
    return `"${text}"`;
}

const headers = [
    'id',
    'name',
    'category',
    'action',
    'archetype',
    'domain',
    'intent',
    'workflow_1',
    'workflow_2',
    'workflow_3',
    'workflow_4',
    'input_hint'
];

const rows = [headers.join(',')];
const archetypeDistribution = {};

for (const utility of utilities) {
    const intent = analyzeUtilityIntent(utility);
    archetypeDistribution[intent.archetype] = (archetypeDistribution[intent.archetype] || 0) + 1;

    const row = [
        utility.id,
        utility.name,
        utility.category,
        intent.action,
        intent.archetype,
        intent.domain,
        intent.intent,
        intent.workflow[0] || '',
        intent.workflow[1] || '',
        intent.workflow[2] || '',
        intent.workflow[3] || '',
        intent.inputHint
    ];

    rows.push(row.map(escapeCsv).join(','));
}

fs.writeFileSync('utility-intent-plan.csv', rows.join('\n'));

const markdownLines = [
    '# Utility Intent Plan',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    `Total utilities: ${utilities.length}`,
    '',
    '## Archetype Distribution',
    ''
];

for (const [archetype, count] of Object.entries(archetypeDistribution).sort((a, b) => b[1] - a[1])) {
    markdownLines.push(`- ${archetype}: ${count}`);
}

markdownLines.push('');
markdownLines.push('Detailed per-tool intent and workflow rows are in `utility-intent-plan.csv`.');

fs.writeFileSync('utility-intent-plan.md', markdownLines.join('\n'));

console.log(JSON.stringify({
    totalUtilities: utilities.length,
    archetypeDistribution
}, null, 2));
