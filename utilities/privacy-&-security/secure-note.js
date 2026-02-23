import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "secure-note",
    "name": "Secure Note",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "note",
    "archetype": "coach",
    "domain": "Secure",
    "intent": "Note gives targeted Secure guidance with next actions.",
    "workflow": [
        "Assess secure baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "secure",
        "note"
    ]
};

export default createBespokeUtility(metadata);
