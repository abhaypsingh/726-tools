import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "speed-reader",
    "name": "Speed Reader",
    "category": "learning & memory",
    "description": "A learning & memory utility",
    "complexity": "advanced",
    "action": "reader",
    "archetype": "coach",
    "domain": "Speed",
    "intent": "Reader gives targeted Speed guidance with next actions.",
    "workflow": [
        "Assess speed baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "speed",
        "reader"
    ]
};

export default createBespokeUtility(metadata);
