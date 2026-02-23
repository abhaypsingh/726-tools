import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "competitor-tracker",
    "name": "Competitor Tracker",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "advanced",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Competitor",
    "intent": "Tracker reviews Competitor input, highlights signals, and flags risks.",
    "workflow": [
        "Parse competitor context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "competitor",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
