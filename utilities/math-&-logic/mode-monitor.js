import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mode-monitor",
    "name": "Mode Monitor",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Mode",
    "intent": "Monitor reviews Mode input, highlights signals, and flags risks.",
    "workflow": [
        "Parse mode context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "mode",
        "monitor"
    ]
};

export default createBespokeUtility(metadata);
