import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "metronome-plus",
    "name": "Metronome Plus",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "plus",
    "archetype": "coach",
    "domain": "Metronome",
    "intent": "Plus gives targeted Metronome guidance with next actions.",
    "workflow": [
        "Assess metronome baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "metronome"
    ]
};

export default createBespokeUtility(metadata);
