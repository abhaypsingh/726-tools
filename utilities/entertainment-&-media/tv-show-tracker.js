import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "tv-show-tracker",
    "name": "Tv Show Tracker",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Tv Show",
    "intent": "Tracker reviews Tv Show input, highlights signals, and flags risks.",
    "workflow": [
        "Parse tv show context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "show",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
