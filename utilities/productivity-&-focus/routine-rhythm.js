import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "routine-rhythm",
    "name": "Routine Rhythm",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "rhythm",
    "archetype": "coach",
    "domain": "Routine",
    "intent": "Rhythm gives targeted Routine guidance with next actions.",
    "workflow": [
        "Assess routine baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "routine",
        "rhythm"
    ]
};

export default createBespokeUtility(metadata);
