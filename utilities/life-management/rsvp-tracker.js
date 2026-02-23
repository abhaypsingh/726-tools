import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "rsvp-tracker",
    "name": "Rsvp Tracker",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Rsvp",
    "intent": "Tracker reviews Rsvp input, highlights signals, and flags risks.",
    "workflow": [
        "Parse rsvp context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "rsvp",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
