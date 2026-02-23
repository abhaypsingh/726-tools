import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "tracker-blocker",
    "name": "Tracker Blocker",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Blocker",
    "intent": "Tracker reviews Blocker input, highlights signals, and flags risks.",
    "workflow": [
        "Parse blocker context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "tracker",
        "blocker"
    ]
};

export default createBespokeUtility(metadata);
