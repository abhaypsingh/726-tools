import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "spice-selector",
    "name": "Spice Selector",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "finder",
    "archetype": "explore",
    "domain": "Spice",
    "intent": "Finder explores Spice options and prioritizes the strongest paths.",
    "workflow": [
        "Frame spice search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "spice",
        "selector"
    ]
};

export default createBespokeUtility(metadata);
