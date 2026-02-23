import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "privacy-scanner",
    "name": "Privacy Scanner",
    "category": "privacy & security",
    "description": "A privacy & security utility",
    "complexity": "advanced",
    "action": "scanner",
    "archetype": "inspect",
    "domain": "Privacy",
    "intent": "Scanner reviews Privacy input, highlights signals, and flags risks.",
    "workflow": [
        "Parse privacy context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "privacy",
        "scanner"
    ]
};

export default createBespokeUtility(metadata);
