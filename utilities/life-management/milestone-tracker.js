import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "milestone-tracker",
    "name": "Milestone Tracker",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Milestone",
    "intent": "Tracker reviews Milestone input, highlights signals, and flags risks.",
    "workflow": [
        "Parse milestone context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "milestone",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
