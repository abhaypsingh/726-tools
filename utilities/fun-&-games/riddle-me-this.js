import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "riddle-me-this",
    "name": "Riddle Me This",
    "category": "fun & games",
    "description": "A powerful tool for fun & games tasks",
    "complexity": "intermediate",
    "action": "this",
    "archetype": "coach",
    "domain": "Riddle Me",
    "intent": "This gives targeted Riddle Me guidance with next actions.",
    "workflow": [
        "Assess riddle me baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "riddle",
        "this"
    ]
};

export default createBespokeUtility(metadata);
