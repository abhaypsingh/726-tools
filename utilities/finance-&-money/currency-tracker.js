import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "currency-tracker",
    "name": "Currency Tracker",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Currency",
    "intent": "Tracker reviews Currency input, highlights signals, and flags risks.",
    "workflow": [
        "Parse currency context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "currency",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
