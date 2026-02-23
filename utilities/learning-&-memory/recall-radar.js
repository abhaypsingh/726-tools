import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "recall-radar",
    "name": "Recall Radar",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Recall",
    "intent": "Monitor reviews Recall input, highlights signals, and flags risks.",
    "workflow": [
        "Parse recall context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "recall",
        "radar"
    ]
};

export default createBespokeUtility(metadata);
