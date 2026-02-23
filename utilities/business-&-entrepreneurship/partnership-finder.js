import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "partnership-finder",
    "name": "Partnership Finder",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "finder",
    "archetype": "explore",
    "domain": "Partnership",
    "intent": "Finder explores Partnership options and prioritizes the strongest paths.",
    "workflow": [
        "Frame partnership search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "partnership",
        "finder"
    ]
};

export default createBespokeUtility(metadata);
