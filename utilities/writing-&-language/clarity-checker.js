import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "clarity-checker",
    "name": "Clarity Checker",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "checker",
    "archetype": "inspect",
    "domain": "Clarity",
    "intent": "Checker reviews Clarity input, highlights signals, and flags risks.",
    "workflow": [
        "Parse clarity context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "clarity",
        "checker"
    ]
};

export default createBespokeUtility(metadata);
