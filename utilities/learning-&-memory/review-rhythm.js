import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "review-rhythm",
    "name": "Review Rhythm",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "rhythm",
    "archetype": "coach",
    "domain": "Review",
    "intent": "Rhythm gives targeted Review guidance with next actions.",
    "workflow": [
        "Assess review baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "review",
        "rhythm"
    ]
};

export default createBespokeUtility(metadata);
