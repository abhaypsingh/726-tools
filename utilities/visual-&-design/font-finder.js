import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "font-finder",
    "name": "Font Finder",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "finder",
    "archetype": "explore",
    "domain": "Font",
    "intent": "Finder explores Font options and prioritizes the strongest paths.",
    "workflow": [
        "Frame font search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "font",
        "finder"
    ]
};

export default createBespokeUtility(metadata);
