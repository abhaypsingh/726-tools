import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "health-tracker",
    "name": "Health Tracker",
    "category": "health & fitness",
    "description": "A health & fitness utility",
    "complexity": "advanced",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Health",
    "intent": "Tracker reviews Health input, highlights signals, and flags risks.",
    "workflow": [
        "Parse health context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "health",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
