import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "career-compass",
    "name": "Career Compass",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "navigator",
    "archetype": "explore",
    "domain": "Career",
    "intent": "Navigator explores Career options and prioritizes the strongest paths.",
    "workflow": [
        "Frame career search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "career",
        "compass"
    ]
};

export default createBespokeUtility(metadata);
