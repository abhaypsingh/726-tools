import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "instrument-tuner",
    "name": "Instrument Tuner",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "tuner",
    "archetype": "coach",
    "domain": "Instrument",
    "intent": "Tuner gives targeted Instrument guidance with next actions.",
    "workflow": [
        "Assess instrument baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "instrument",
        "tuner"
    ]
};

export default createBespokeUtility(metadata);
