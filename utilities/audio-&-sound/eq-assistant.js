import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "eq-assistant",
    "name": "Eq Assistant",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "assistant",
    "archetype": "coach",
    "domain": "Eq",
    "intent": "Assistant gives targeted Eq guidance with next actions.",
    "workflow": [
        "Assess eq baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "assistant"
    ]
};

export default createBespokeUtility(metadata);
