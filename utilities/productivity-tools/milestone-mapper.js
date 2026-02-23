import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "milestone-mapper",
    "name": "Milestone Mapper",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "mapper",
    "archetype": "explore",
    "domain": "Milestone",
    "intent": "Mapper explores Milestone options and prioritizes the strongest paths.",
    "workflow": [
        "Frame milestone search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "milestone",
        "mapper"
    ]
};

export default createBespokeUtility(metadata);
