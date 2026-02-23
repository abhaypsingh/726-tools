import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "utility-tracker",
    "name": "Utility Tracker",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Utility",
    "intent": "Tracker reviews Utility input, highlights signals, and flags risks.",
    "workflow": [
        "Parse utility context",
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
