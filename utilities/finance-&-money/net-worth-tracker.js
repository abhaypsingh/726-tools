import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "net-worth-tracker",
    "name": "Net Worth Tracker",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Net Worth",
    "intent": "Tracker reviews Net Worth input, highlights signals, and flags risks.",
    "workflow": [
        "Parse net worth context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "net",
        "worth",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
