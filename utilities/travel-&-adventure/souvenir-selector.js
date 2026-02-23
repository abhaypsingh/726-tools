import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "souvenir-selector",
    "name": "Souvenir Selector",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "finder",
    "archetype": "explore",
    "domain": "Souvenir",
    "intent": "Finder explores Souvenir options and prioritizes the strongest paths.",
    "workflow": [
        "Frame souvenir search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "souvenir",
        "selector"
    ]
};

export default createBespokeUtility(metadata);
