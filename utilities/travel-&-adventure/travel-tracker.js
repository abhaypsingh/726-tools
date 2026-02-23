import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "travel-tracker",
    "name": "Travel Tracker",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Travel",
    "intent": "Tracker reviews Travel input, highlights signals, and flags risks.",
    "workflow": [
        "Parse travel context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "travel",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
