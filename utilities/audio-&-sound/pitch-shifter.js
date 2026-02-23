import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "pitch-shifter",
    "name": "Pitch Shifter",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "shifter",
    "archetype": "coach",
    "domain": "Pitch",
    "intent": "Shifter gives targeted Pitch guidance with next actions.",
    "workflow": [
        "Assess pitch baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "pitch",
        "shifter"
    ]
};

export default createBespokeUtility(metadata);
