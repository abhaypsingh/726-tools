import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "birthday-buddy",
    "name": "Birthday Buddy",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "assistant",
    "archetype": "coach",
    "domain": "Birthday",
    "intent": "Assistant gives targeted Birthday guidance with next actions.",
    "workflow": [
        "Assess birthday baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "birthday",
        "buddy"
    ]
};

export default createBespokeUtility(metadata);
