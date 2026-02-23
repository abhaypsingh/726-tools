import { UtilityRegistry } from './js/registry.js';
import { analyzeUtilityIntent, runUtilityIntent } from './js/utility-intent-engine.js';

const utilities = UtilityRegistry.getAllUtilities();
const failures = [];

for (const utility of utilities) {
    try {
        const intent = analyzeUtilityIntent(utility);

        if (!intent.intent || !Array.isArray(intent.workflow) || intent.workflow.length === 0) {
            failures.push(`${utility.id}:intent-missing`);
            continue;
        }

        const sampleInput = [
            `Goal: improve ${utility.name}`,
            'Current: 12',
            'Target: 18',
            'Constraint: 30 days'
        ].join('\n');

        const result = runUtilityIntent(utility, sampleInput);

        if (!result.summary) {
            failures.push(`${utility.id}:summary-missing`);
            continue;
        }

        if (!Array.isArray(result.recommendations) || result.recommendations.length === 0) {
            failures.push(`${utility.id}:recommendations-missing`);
        }
    } catch (error) {
        failures.push(`${utility.id}:${error.message}`);
    }
}

console.log(JSON.stringify({
    total: utilities.length,
    failures: failures.length
}, null, 2));

if (failures.length > 0) {
    console.log(failures.slice(0, 30).join('\n'));
    process.exit(1);
}
