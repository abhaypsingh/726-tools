import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "trivia-time",
    "name": "Trivia Time",
    "category": "fun & games",
    "description": "A powerful tool for fun & games tasks",
    "complexity": "intermediate",
    "action": "time",
    "archetype": "coach",
    "domain": "Trivia",
    "intent": "Time gives targeted Trivia guidance with next actions.",
    "workflow": [
        "Assess trivia baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "trivia",
        "time"
    ]
};

export default createBespokeUtility(metadata);
