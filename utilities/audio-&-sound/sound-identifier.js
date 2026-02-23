import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "sound-identifier",
    "name": "Sound Identifier",
    "category": "audio & sound",
    "description": "A audio & sound utility",
    "complexity": "advanced",
    "action": "identifier",
    "archetype": "explore",
    "domain": "Sound",
    "intent": "Identifier explores Sound options and prioritizes the strongest paths.",
    "workflow": [
        "Frame sound search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "sound",
        "identifier"
    ]
};

export default createBespokeUtility(metadata);
