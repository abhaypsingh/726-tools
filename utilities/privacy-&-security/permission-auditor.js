import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "permission-auditor",
    "name": "Permission Auditor",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "auditor",
    "archetype": "inspect",
    "domain": "Permission",
    "intent": "Auditor reviews Permission input, highlights signals, and flags risks.",
    "workflow": [
        "Parse permission context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "permission",
        "auditor"
    ]
};

export default createBespokeUtility(metadata);
