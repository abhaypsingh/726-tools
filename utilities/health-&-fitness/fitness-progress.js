import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "fitness-progress",
    "name": "Fitness Progress",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "progress",
    "archetype": "coach",
    "domain": "Fitness",
    "intent": "Progress gives targeted Fitness guidance with next actions.",
    "workflow": [
        "Assess fitness baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "fitness",
        "progress"
    ]
};

export default createBespokeUtility(metadata);
