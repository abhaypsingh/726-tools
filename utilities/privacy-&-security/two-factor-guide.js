import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "two-factor-guide",
    "name": "Two Factor Guide",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "guide",
    "archetype": "coach",
    "domain": "Two Factor",
    "intent": "Guide gives targeted Two Factor guidance with next actions.",
    "workflow": [
        "Assess two factor baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "two",
        "factor",
        "guide"
    ]
};

export default createBespokeUtility(metadata);
