import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "certification-tracker",
    "name": "Certification Tracker",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Certification",
    "intent": "Tracker reviews Certification input, highlights signals, and flags risks.",
    "workflow": [
        "Parse certification context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "certification",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
