import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "compliance-checker",
    "name": "Compliance Checker",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "checker",
    "archetype": "inspect",
    "domain": "Compliance",
    "intent": "Checker reviews Compliance input, highlights signals, and flags risks.",
    "workflow": [
        "Parse compliance context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "compliance",
        "checker"
    ]
};

export default createBespokeUtility(metadata);
