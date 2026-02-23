import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "composition-compass",
    "name": "Composition Compass",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "navigator",
    "archetype": "explore",
    "domain": "Composition",
    "intent": "Navigator explores Composition options and prioritizes the strongest paths.",
    "workflow": [
        "Frame composition search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "composition",
        "compass"
    ]
};

export default createBespokeUtility(metadata);
