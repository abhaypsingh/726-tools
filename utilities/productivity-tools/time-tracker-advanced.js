import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "time-tracker-advanced",
    "name": "Time Tracker Advanced",
    "category": "productivity tools",
    "description": "A productivity tools utility",
    "complexity": "advanced",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Time",
    "intent": "Tracker reviews Time input, highlights signals, and flags risks.",
    "workflow": [
        "Parse time context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "time",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
