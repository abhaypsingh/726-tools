import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "celebrity-tracker",
    "name": "Celebrity Tracker",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Celebrity",
    "intent": "Tracker reviews Celebrity input, highlights signals, and flags risks.",
    "workflow": [
        "Parse celebrity context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "celebrity",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
