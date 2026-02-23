import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "flow-finder",
    "name": "Flow Finder",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "finder",
    "archetype": "explore",
    "domain": "Flow",
    "intent": "Finder explores Flow options and prioritizes the strongest paths.",
    "workflow": [
        "Frame flow search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "flow",
        "finder"
    ]
};

export default createBespokeUtility(metadata);
