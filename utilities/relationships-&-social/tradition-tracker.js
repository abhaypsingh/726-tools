import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "tradition-tracker",
    "name": "Tradition Tracker",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Tradition",
    "intent": "Tracker reviews Tradition input, highlights signals, and flags risks.",
    "workflow": [
        "Parse tradition context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "tradition",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
