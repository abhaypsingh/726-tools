import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "access-controller",
    "name": "Access Controller",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "controller",
    "archetype": "coach",
    "domain": "Access",
    "intent": "Controller gives targeted Access guidance with next actions.",
    "workflow": [
        "Assess access baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "access",
        "controller"
    ]
};

export default createBespokeUtility(metadata);
