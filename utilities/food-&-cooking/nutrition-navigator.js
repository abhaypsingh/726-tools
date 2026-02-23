import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "nutrition-navigator",
    "name": "Nutrition Navigator",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "navigator",
    "archetype": "explore",
    "domain": "Nutrition",
    "intent": "Navigator explores Nutrition options and prioritizes the strongest paths.",
    "workflow": [
        "Frame nutrition search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "nutrition",
        "navigator"
    ]
};

export default createBespokeUtility(metadata);
