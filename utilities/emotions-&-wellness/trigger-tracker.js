import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "trigger-tracker",
    "name": "Trigger Tracker",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Trigger",
    "intent": "Tracker reviews Trigger input, highlights signals, and flags risks.",
    "workflow": [
        "Parse trigger context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "trigger",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
