import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "macro-mapper",
    "name": "Macro Mapper",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "mapper",
    "archetype": "explore",
    "domain": "Macro",
    "intent": "Mapper explores Macro options and prioritizes the strongest paths.",
    "workflow": [
        "Frame macro search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "macro",
        "mapper"
    ]
};

export default createBespokeUtility(metadata);
