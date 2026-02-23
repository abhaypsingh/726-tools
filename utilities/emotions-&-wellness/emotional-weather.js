import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "emotional-weather",
    "name": "Emotional Weather",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "weather",
    "archetype": "coach",
    "domain": "Emotional",
    "intent": "Weather gives targeted Emotional guidance with next actions.",
    "workflow": [
        "Assess emotional baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "emotional",
        "weather"
    ]
};

export default createBespokeUtility(metadata);
