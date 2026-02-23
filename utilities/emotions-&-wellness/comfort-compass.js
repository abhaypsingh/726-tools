import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "comfort-compass",
    "name": "Comfort Compass",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "navigator",
    "archetype": "explore",
    "domain": "Comfort",
    "intent": "Navigator explores Comfort options and prioritizes the strongest paths.",
    "workflow": [
        "Frame comfort search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "comfort",
        "compass"
    ]
};

export default createBespokeUtility(metadata);
