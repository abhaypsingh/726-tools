import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "water-tracker",
    "name": "Water Tracker",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Water",
    "intent": "Tracker reviews Water input, highlights signals, and flags risks.",
    "workflow": [
        "Parse water context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "water",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
