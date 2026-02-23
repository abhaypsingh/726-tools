import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "audio-compressor",
    "name": "Audio Compressor",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "compressor",
    "archetype": "coach",
    "domain": "Audio",
    "intent": "Compressor gives targeted Audio guidance with next actions.",
    "workflow": [
        "Assess audio baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "audio",
        "compressor"
    ]
};

export default createBespokeUtility(metadata);
