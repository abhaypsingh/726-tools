import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "revision-radar",
    "name": "Revision Radar",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Revision",
    "intent": "Monitor reviews Revision input, highlights signals, and flags risks.",
    "workflow": [
        "Parse revision context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "revision",
        "radar"
    ]
};

export default createBespokeUtility(metadata);
