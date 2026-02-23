import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "plant-identifier",
    "name": "Plant Identifier",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "identifier",
    "archetype": "explore",
    "domain": "Plant",
    "intent": "Identifier explores Plant options and prioritizes the strongest paths.",
    "workflow": [
        "Frame plant search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "plant",
        "identifier"
    ]
};

export default createBespokeUtility(metadata);
