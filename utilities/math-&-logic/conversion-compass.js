import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "conversion-compass",
    "name": "Conversion Compass",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "navigator",
    "archetype": "explore",
    "domain": "Conversion",
    "intent": "Navigator explores Conversion options and prioritizes the strongest paths.",
    "workflow": [
        "Frame conversion search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "conversion",
        "compass"
    ]
};

export default createBespokeUtility(metadata);
