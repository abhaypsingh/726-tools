import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "sound-visualizer",
    "name": "Sound Visualizer",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "visualizer",
    "archetype": "coach",
    "domain": "Sound",
    "intent": "Visualizer gives targeted Sound guidance with next actions.",
    "workflow": [
        "Assess sound baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "sound",
        "visualizer"
    ]
};

export default createBespokeUtility(metadata);
