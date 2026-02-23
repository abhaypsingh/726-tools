import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "risk-radar",
    "name": "Risk Radar",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Risk",
    "intent": "Monitor reviews Risk input, highlights signals, and flags risks.",
    "workflow": [
        "Parse risk context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "risk",
        "radar"
    ]
};

export default createBespokeUtility(metadata);
