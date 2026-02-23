import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "freshness-tracker",
    "name": "Freshness Tracker",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Freshness",
    "intent": "Tracker reviews Freshness input, highlights signals, and flags risks.",
    "workflow": [
        "Parse freshness context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "freshness",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
