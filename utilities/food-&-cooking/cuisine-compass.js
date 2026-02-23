import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "cuisine-compass",
    "name": "Cuisine Compass",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "navigator",
    "archetype": "explore",
    "domain": "Cuisine",
    "intent": "Navigator explores Cuisine options and prioritizes the strongest paths.",
    "workflow": [
        "Frame cuisine search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "cuisine",
        "compass"
    ]
};

export default createBespokeUtility(metadata);
