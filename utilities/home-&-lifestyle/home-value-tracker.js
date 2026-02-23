import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "home-value-tracker",
    "name": "Home Value Tracker",
    "category": "home & lifestyle",
    "description": "A home & lifestyle utility",
    "complexity": "advanced",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Home Value",
    "intent": "Tracker reviews Home Value input, highlights signals, and flags risks.",
    "workflow": [
        "Parse home value context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "home",
        "value",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
