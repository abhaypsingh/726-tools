import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "frequency-finder",
    "name": "Frequency Finder",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "finder",
    "archetype": "explore",
    "domain": "Frequency",
    "intent": "Finder explores Frequency options and prioritizes the strongest paths.",
    "workflow": [
        "Frame frequency search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "frequency",
        "finder"
    ]
};

export default createBespokeUtility(metadata);
