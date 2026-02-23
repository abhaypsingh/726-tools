import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "rapport-radar",
    "name": "Rapport Radar",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Rapport",
    "intent": "Monitor reviews Rapport input, highlights signals, and flags risks.",
    "workflow": [
        "Parse rapport context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "rapport",
        "radar"
    ]
};

export default createBespokeUtility(metadata);
