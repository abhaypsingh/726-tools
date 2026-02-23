import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "median-mapper",
    "name": "Median Mapper",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "mapper",
    "archetype": "explore",
    "domain": "Median",
    "intent": "Mapper explores Median options and prioritizes the strongest paths.",
    "workflow": [
        "Frame median search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "median",
        "mapper"
    ]
};

export default createBespokeUtility(metadata);
