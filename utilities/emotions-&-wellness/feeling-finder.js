import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "feeling-finder",
    "name": "Feeling Finder",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "finder",
    "archetype": "explore",
    "domain": "Feeling",
    "intent": "Finder explores Feeling options and prioritizes the strongest paths.",
    "workflow": [
        "Frame feeling search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "feeling",
        "finder"
    ]
};

export default createBespokeUtility(metadata);
