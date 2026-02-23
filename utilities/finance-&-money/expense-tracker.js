import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "expense-tracker",
    "name": "Expense Tracker",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Expense",
    "intent": "Tracker reviews Expense input, highlights signals, and flags risks.",
    "workflow": [
        "Parse expense context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "expense",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
