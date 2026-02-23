import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "reciprocity-radar",
    "name": "Reciprocity Radar",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Reciprocity",
    "intent": "Monitor reviews Reciprocity input, highlights signals, and flags risks.",
    "workflow": [
        "Parse reciprocity context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "reciprocity",
        "radar"
    ]
};

export default createBespokeUtility(metadata);
