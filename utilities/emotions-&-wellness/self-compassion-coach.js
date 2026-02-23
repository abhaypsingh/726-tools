import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "self-compassion-coach",
    "name": "Self Compassion Coach",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "coach",
    "archetype": "coach",
    "domain": "Self Compassion",
    "intent": "Coach gives targeted Self Compassion guidance with next actions.",
    "workflow": [
        "Assess self compassion baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "self",
        "compassion",
        "coach"
    ]
};

export default createBespokeUtility(metadata);
