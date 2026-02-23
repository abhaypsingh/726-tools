import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "sample-slicer",
    "name": "Sample Slicer",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "slicer",
    "archetype": "coach",
    "domain": "Sample",
    "intent": "Slicer gives targeted Sample guidance with next actions.",
    "workflow": [
        "Assess sample baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "sample",
        "slicer"
    ]
};

export default createBespokeUtility(metadata);
