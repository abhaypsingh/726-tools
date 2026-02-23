import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "emotion-encoder",
    "name": "Emotion Encoder",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "encoder",
    "archetype": "coach",
    "domain": "Emotion",
    "intent": "Encoder gives targeted Emotion guidance with next actions.",
    "workflow": [
        "Assess emotion baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "emotion",
        "encoder"
    ]
};

export default createBespokeUtility(metadata);
