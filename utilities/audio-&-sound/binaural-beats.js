import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "binaural-beats",
    "name": "Binaural Beats",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "beats",
    "archetype": "coach",
    "domain": "Binaural",
    "intent": "Beats gives targeted Binaural guidance with next actions.",
    "workflow": [
        "Assess binaural baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "binaural",
        "beats"
    ]
};

export default createBespokeUtility(metadata);
