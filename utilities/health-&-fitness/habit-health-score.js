import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "habit-health-score",
    "name": "Habit Health Score",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "score",
    "archetype": "coach",
    "domain": "Habit Health",
    "intent": "Score gives targeted Habit Health guidance with next actions.",
    "workflow": [
        "Assess habit health baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "habit",
        "health",
        "score"
    ]
};

export default createBespokeUtility(metadata);
