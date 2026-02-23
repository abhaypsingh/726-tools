import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "decibel-meter",
    "name": "Decibel Meter",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "meter",
    "archetype": "coach",
    "domain": "Decibel",
    "intent": "Meter gives targeted Decibel guidance with next actions.",
    "workflow": [
        "Assess decibel baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "decibel",
        "meter"
    ]
};

export default createBespokeUtility(metadata);
