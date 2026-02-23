import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "interview-prep",
    "name": "Interview Prep",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "prep",
    "archetype": "coach",
    "domain": "Interview",
    "intent": "Prep gives targeted Interview guidance with next actions.",
    "workflow": [
        "Assess interview baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "interview",
        "prep"
    ]
};

export default createBespokeUtility(metadata);
