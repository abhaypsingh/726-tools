import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "symptom-tracker",
    "name": "Symptom Tracker",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Symptom",
    "intent": "Tracker reviews Symptom input, highlights signals, and flags risks.",
    "workflow": [
        "Parse symptom context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "symptom",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
