import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "action-item-tracker",
    "name": "Action Item Tracker",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Action Item",
    "intent": "Tracker reviews Action Item input, highlights signals, and flags risks.",
    "workflow": [
        "Parse action item context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "action",
        "item",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
