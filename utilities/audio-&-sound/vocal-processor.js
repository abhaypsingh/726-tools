import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "vocal-processor",
    "name": "Vocal Processor",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "processor",
    "archetype": "coach",
    "domain": "Vocal",
    "intent": "Processor gives targeted Vocal guidance with next actions.",
    "workflow": [
        "Assess vocal baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "vocal",
        "processor"
    ]
};

export default createBespokeUtility(metadata);
