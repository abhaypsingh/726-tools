import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "retention-radar",
    "name": "Retention Radar",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Retention",
    "intent": "Monitor reviews Retention input, highlights signals, and flags risks.",
    "workflow": [
        "Parse retention context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "retention",
        "radar"
    ]
};

export default createBespokeUtility(metadata);
