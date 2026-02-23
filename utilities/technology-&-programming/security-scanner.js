import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "security-scanner",
    "name": "Security Scanner",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "scanner",
    "archetype": "inspect",
    "domain": "Security",
    "intent": "Scanner reviews Security input, highlights signals, and flags risks.",
    "workflow": [
        "Parse security context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "security",
        "scanner"
    ]
};

export default createBespokeUtility(metadata);
