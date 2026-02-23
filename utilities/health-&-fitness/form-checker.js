import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "form-checker",
    "name": "Form Checker",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "checker",
    "archetype": "inspect",
    "domain": "Form",
    "intent": "Checker reviews Form input, highlights signals, and flags risks.",
    "workflow": [
        "Parse form context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "form",
        "checker"
    ]
};

export default createBespokeUtility(metadata);
