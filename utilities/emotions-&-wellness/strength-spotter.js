import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "strength-spotter",
    "name": "Strength Spotter",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "spotter",
    "archetype": "coach",
    "domain": "Strength",
    "intent": "Spotter gives targeted Strength guidance with next actions.",
    "workflow": [
        "Assess strength baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "strength",
        "spotter"
    ]
};

export default createBespokeUtility(metadata);
