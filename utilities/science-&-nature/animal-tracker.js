import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "animal-tracker",
    "name": "Animal Tracker",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Animal",
    "intent": "Tracker reviews Animal input, highlights signals, and flags risks.",
    "workflow": [
        "Parse animal context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "animal",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
