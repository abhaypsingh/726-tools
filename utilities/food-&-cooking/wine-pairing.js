import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "wine-pairing",
    "name": "Wine Pairing",
    "category": "food & cooking",
    "description": "A food & cooking utility",
    "complexity": "advanced",
    "action": "pairing",
    "archetype": "coach",
    "domain": "Wine",
    "intent": "Pairing gives targeted Wine guidance with next actions.",
    "workflow": [
        "Assess wine baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "wine",
        "pairing"
    ]
};

export default createBespokeUtility(metadata);
