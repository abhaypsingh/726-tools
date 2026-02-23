import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "geology-identifier",
    "name": "Geology Identifier",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "identifier",
    "archetype": "explore",
    "domain": "Geology",
    "intent": "Identifier explores Geology options and prioritizes the strongest paths.",
    "workflow": [
        "Frame geology search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "geology",
        "identifier"
    ]
};

export default createBespokeUtility(metadata);
