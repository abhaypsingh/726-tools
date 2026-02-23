import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "deviation-detector",
    "name": "Deviation Detector",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "analyzer",
    "archetype": "inspect",
    "domain": "Deviation",
    "intent": "Analyzer reviews Deviation input, highlights signals, and flags risks.",
    "workflow": [
        "Parse deviation context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "deviation",
        "detector"
    ]
};

export default createBespokeUtility(metadata);
