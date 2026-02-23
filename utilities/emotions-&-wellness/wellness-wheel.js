import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "wellness-wheel",
    "name": "Wellness Wheel",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "wheel",
    "archetype": "coach",
    "domain": "Wellness",
    "intent": "Wheel gives targeted Wellness guidance with next actions.",
    "workflow": [
        "Assess wellness baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "wellness",
        "wheel"
    ]
};

export default createBespokeUtility(metadata);
