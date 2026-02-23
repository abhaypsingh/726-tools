import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "recovery-radar",
    "name": "Recovery Radar",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Recovery",
    "intent": "Monitor reviews Recovery input, highlights signals, and flags risks.",
    "workflow": [
        "Parse recovery context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "recovery",
        "radar"
    ]
};

export default createBespokeUtility(metadata);
