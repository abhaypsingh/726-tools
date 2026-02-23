import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "innovation-tracker",
    "name": "Innovation Tracker",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Innovation",
    "intent": "Tracker reviews Innovation input, highlights signals, and flags risks.",
    "workflow": [
        "Parse innovation context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "innovation",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
