import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "life-lessons-library",
    "name": "Life Lessons Library",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "library",
    "archetype": "coach",
    "domain": "Life Lessons",
    "intent": "Library gives targeted Life Lessons guidance with next actions.",
    "workflow": [
        "Assess life lessons baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "life",
        "lessons",
        "library"
    ]
};

export default createBespokeUtility(metadata);
