import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "color-compass",
    "name": "Color Compass",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "navigator",
    "archetype": "explore",
    "domain": "Color",
    "intent": "Navigator explores Color options and prioritizes the strongest paths.",
    "workflow": [
        "Frame color search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "color",
        "compass"
    ]
};

export default createBespokeUtility(metadata);
