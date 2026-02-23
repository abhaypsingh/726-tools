import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "networking-navigator",
    "name": "Networking Navigator",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "navigator",
    "archetype": "explore",
    "domain": "Networking",
    "intent": "Navigator explores Networking options and prioritizes the strongest paths.",
    "workflow": [
        "Frame networking search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "networking",
        "navigator"
    ]
};

export default createBespokeUtility(metadata);
