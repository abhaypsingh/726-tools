import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "cooking-challenge",
    "name": "Cooking Challenge",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "challenge",
    "archetype": "coach",
    "domain": "Cooking",
    "intent": "Challenge gives targeted Cooking guidance with next actions.",
    "workflow": [
        "Assess cooking baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "cooking",
        "challenge"
    ]
};

export default createBespokeUtility(metadata);
