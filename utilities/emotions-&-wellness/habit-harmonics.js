import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "habit-harmonics",
    "name": "Habit Harmonics",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "harmonics",
    "archetype": "coach",
    "domain": "Habit",
    "intent": "Harmonics gives targeted Habit guidance with next actions.",
    "workflow": [
        "Assess habit baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "habit",
        "harmonics"
    ]
};

export default createBespokeUtility(metadata);
