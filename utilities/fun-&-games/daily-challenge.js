import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "daily-challenge",
    "name": "Daily Challenge",
    "category": "fun & games",
    "description": "A powerful tool for fun & games tasks",
    "complexity": "intermediate",
    "action": "challenge",
    "archetype": "coach",
    "domain": "Daily",
    "intent": "Challenge gives targeted Daily guidance with next actions.",
    "workflow": [
        "Assess daily baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "daily",
        "challenge"
    ]
};

export default createBespokeUtility(metadata);
