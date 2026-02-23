import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "slogan-smith",
    "name": "Slogan Smith",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "smith",
    "archetype": "coach",
    "domain": "Slogan",
    "intent": "Smith gives targeted Slogan guidance with next actions.",
    "workflow": [
        "Assess slogan baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "slogan",
        "smith"
    ]
};

export default createBespokeUtility(metadata);
