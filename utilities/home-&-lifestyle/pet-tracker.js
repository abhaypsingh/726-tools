import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "pet-tracker",
    "name": "Pet Tracker",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Pet",
    "intent": "Tracker reviews Pet input, highlights signals, and flags risks.",
    "workflow": [
        "Parse pet context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "pet",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
