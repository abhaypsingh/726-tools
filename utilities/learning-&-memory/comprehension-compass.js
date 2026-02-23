import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "comprehension-compass",
    "name": "Comprehension Compass",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "navigator",
    "archetype": "explore",
    "domain": "Comprehension",
    "intent": "Navigator explores Comprehension options and prioritizes the strongest paths.",
    "workflow": [
        "Frame comprehension search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "comprehension",
        "compass"
    ]
};

export default createBespokeUtility(metadata);
