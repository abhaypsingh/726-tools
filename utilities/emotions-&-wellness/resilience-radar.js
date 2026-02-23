import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "resilience-radar",
    "name": "Resilience Radar",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Resilience",
    "intent": "Monitor reviews Resilience input, highlights signals, and flags risks.",
    "workflow": [
        "Parse resilience context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "resilience",
        "radar"
    ]
};

export default createBespokeUtility(metadata);
