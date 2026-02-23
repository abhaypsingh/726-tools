import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "context-compass",
    "name": "Context Compass",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "navigator",
    "archetype": "explore",
    "domain": "Context",
    "intent": "Navigator explores Context options and prioritizes the strongest paths.",
    "workflow": [
        "Frame context search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "context",
        "compass"
    ]
};

export default createBespokeUtility(metadata);
