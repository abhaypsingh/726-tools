import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "process-mapper",
    "name": "Process Mapper",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "mapper",
    "archetype": "explore",
    "domain": "Process",
    "intent": "Mapper explores Process options and prioritizes the strongest paths.",
    "workflow": [
        "Frame process search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "process",
        "mapper"
    ]
};

export default createBespokeUtility(metadata);
