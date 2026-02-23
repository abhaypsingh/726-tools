import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "conflict-compass",
    "name": "Conflict Compass",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "navigator",
    "archetype": "explore",
    "domain": "Conflict",
    "intent": "Navigator explores Conflict options and prioritizes the strongest paths.",
    "workflow": [
        "Frame conflict search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "conflict",
        "compass"
    ]
};

export default createBespokeUtility(metadata);
