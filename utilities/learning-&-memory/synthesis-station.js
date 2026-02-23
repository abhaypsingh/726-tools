import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "synthesis-station",
    "name": "Synthesis Station",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "station",
    "archetype": "coach",
    "domain": "Synthesis",
    "intent": "Station gives targeted Synthesis guidance with next actions.",
    "workflow": [
        "Assess synthesis baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "synthesis",
        "station"
    ]
};

export default createBespokeUtility(metadata);
