import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "passion-finder",
    "name": "Passion Finder",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "finder",
    "archetype": "explore",
    "domain": "Passion",
    "intent": "Finder explores Passion options and prioritizes the strongest paths.",
    "workflow": [
        "Frame passion search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "passion",
        "finder"
    ]
};

export default createBespokeUtility(metadata);
