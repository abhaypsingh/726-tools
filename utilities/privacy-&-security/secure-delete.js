import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "secure-delete",
    "name": "Secure Delete",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "delete",
    "archetype": "coach",
    "domain": "Secure",
    "intent": "Delete gives targeted Secure guidance with next actions.",
    "workflow": [
        "Assess secure baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "secure",
        "delete"
    ]
};

export default createBespokeUtility(metadata);
