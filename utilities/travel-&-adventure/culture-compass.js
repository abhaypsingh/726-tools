import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "culture-compass",
    "name": "Culture Compass",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "navigator",
    "archetype": "explore",
    "domain": "Culture",
    "intent": "Navigator explores Culture options and prioritizes the strongest paths.",
    "workflow": [
        "Frame culture search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "culture",
        "compass"
    ]
};

export default createBespokeUtility(metadata);
