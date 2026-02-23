import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "range-radar",
    "name": "Range Radar",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Range",
    "intent": "Monitor reviews Range input, highlights signals, and flags risks.",
    "workflow": [
        "Parse range context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "range",
        "radar"
    ]
};

export default createBespokeUtility(metadata);
