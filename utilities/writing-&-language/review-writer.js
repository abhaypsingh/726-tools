import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "review-writer",
    "name": "Review Writer",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "writer",
    "archetype": "coach",
    "domain": "Review",
    "intent": "Writer gives targeted Review guidance with next actions.",
    "workflow": [
        "Assess review baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "review",
        "writer"
    ]
};

export default createBespokeUtility(metadata);
