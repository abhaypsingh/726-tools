import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "password-strength-meter",
    "name": "Password Strength Meter",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "meter",
    "archetype": "coach",
    "domain": "Password Strength",
    "intent": "Meter gives targeted Password Strength guidance with next actions.",
    "workflow": [
        "Assess password strength baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "password",
        "strength",
        "meter"
    ]
};

export default createBespokeUtility(metadata);
