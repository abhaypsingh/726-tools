import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "breathing-buddy",
    "name": "Breathing Buddy",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "assistant",
    "archetype": "coach",
    "domain": "Breathing",
    "intent": "Assistant gives targeted Breathing guidance with next actions.",
    "workflow": [
        "Assess breathing baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "breathing",
        "buddy"
    ]
};

export default createBespokeUtility(metadata);
