import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "discount-finder",
    "name": "Discount Finder",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "finder",
    "archetype": "explore",
    "domain": "Discount",
    "intent": "Finder explores Discount options and prioritizes the strongest paths.",
    "workflow": [
        "Frame discount search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "discount",
        "finder"
    ]
};

export default createBespokeUtility(metadata);
