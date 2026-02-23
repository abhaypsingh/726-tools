import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "value-validator",
    "name": "Value Validator",
    "category": "thinking & planning",
    "description": "Test decisions against values",
    "complexity": "intermediate",
    "action": "validator",
    "archetype": "inspect",
    "domain": "Value",
    "intent": "Validator reviews Value input, highlights signals, and flags risks.",
    "workflow": [
        "Parse value context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "value",
        "validator"
    ]
};

export default createBespokeUtility(metadata);
