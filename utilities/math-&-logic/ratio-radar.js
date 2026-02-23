import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "ratio-radar",
    "name": "Ratio Radar",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Ratio",
    "intent": "Monitor reviews Ratio input, highlights signals, and flags risks.",
    "workflow": [
        "Parse ratio context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "ratio",
        "radar"
    ]
};

export default createBespokeUtility(metadata);
