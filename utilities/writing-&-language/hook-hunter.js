import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "hook-hunter",
    "name": "Hook Hunter",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "hunter",
    "archetype": "coach",
    "domain": "Hook",
    "intent": "Hunter gives targeted Hook guidance with next actions.",
    "workflow": [
        "Assess hook baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "hook",
        "hunter"
    ]
};

export default createBespokeUtility(metadata);
