import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "secure-communication",
    "name": "Secure Communication",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "communication",
    "archetype": "coach",
    "domain": "Secure",
    "intent": "Communication gives targeted Secure guidance with next actions.",
    "workflow": [
        "Assess secure baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "secure",
        "communication"
    ]
};

export default createBespokeUtility(metadata);
