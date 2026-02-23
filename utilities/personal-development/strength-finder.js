import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "strength-finder",
    "name": "Strength Finder",
    "category": "personal development",
    "description": "A personal development utility",
    "complexity": "advanced",
    "action": "finder",
    "archetype": "explore",
    "domain": "Strength",
    "intent": "Finder explores Strength options and prioritizes the strongest paths.",
    "workflow": [
        "Frame strength search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "strength",
        "finder"
    ]
};

export default createBespokeUtility(metadata);
