import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "identity-protector",
    "name": "Identity Protector",
    "category": "privacy & security",
    "description": "A privacy & security utility",
    "complexity": "advanced",
    "action": "protector",
    "archetype": "coach",
    "domain": "Identity",
    "intent": "Protector gives targeted Identity guidance with next actions.",
    "workflow": [
        "Assess identity baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "identity",
        "protector"
    ]
};

export default createBespokeUtility(metadata);
