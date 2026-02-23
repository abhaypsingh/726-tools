import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "climate-tracker",
    "name": "Climate Tracker",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Climate",
    "intent": "Tracker reviews Climate input, highlights signals, and flags risks.",
    "workflow": [
        "Parse climate context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "climate",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
