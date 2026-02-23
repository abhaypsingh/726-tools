import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "scale-explorer",
    "name": "Scale Explorer",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "explorer",
    "archetype": "coach",
    "domain": "Scale",
    "intent": "Explorer gives targeted Scale guidance with next actions.",
    "workflow": [
        "Assess scale baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "scale",
        "explorer"
    ]
};

export default createBespokeUtility(metadata);
