import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "xp-tracker",
    "name": "Xp Tracker",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Xp",
    "intent": "Tracker reviews Xp input, highlights signals, and flags risks.",
    "workflow": [
        "Parse xp context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
