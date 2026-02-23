import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "vision-board",
    "name": "Vision Board",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "board",
    "archetype": "coach",
    "domain": "Vision",
    "intent": "Board gives targeted Vision guidance with next actions.",
    "workflow": [
        "Assess vision baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "vision",
        "board"
    ]
};

export default createBespokeUtility(metadata);
