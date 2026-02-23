import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "identity-monitor",
    "name": "Identity Monitor",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "monitor",
    "archetype": "inspect",
    "domain": "Identity",
    "intent": "Monitor reviews Identity input, highlights signals, and flags risks.",
    "workflow": [
        "Parse identity context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "identity",
        "monitor"
    ]
};

export default createBespokeUtility(metadata);
