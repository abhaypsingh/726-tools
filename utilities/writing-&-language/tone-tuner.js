import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "tone-tuner",
    "name": "Tone Tuner",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "tuner",
    "archetype": "coach",
    "domain": "Tone",
    "intent": "Tuner gives targeted Tone guidance with next actions.",
    "workflow": [
        "Assess tone baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "tone",
        "tuner"
    ]
};

export default createBespokeUtility(metadata);
