import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "pantry-tracker",
    "name": "Pantry Tracker",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Pantry",
    "intent": "Tracker reviews Pantry input, highlights signals, and flags risks.",
    "workflow": [
        "Parse pantry context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "pantry",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
