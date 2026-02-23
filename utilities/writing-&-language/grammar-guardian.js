import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "grammar-guardian",
    "name": "Grammar Guardian",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "validator",
    "archetype": "inspect",
    "domain": "Grammar",
    "intent": "Validator reviews Grammar input, highlights signals, and flags risks.",
    "workflow": [
        "Parse grammar context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "grammar",
        "guardian"
    ]
};

export default createBespokeUtility(metadata);
