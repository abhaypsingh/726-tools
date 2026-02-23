import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "crypto-tracker",
    "name": "Crypto Tracker",
    "category": "finance & money",
    "description": "A finance & money utility",
    "complexity": "advanced",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Crypto",
    "intent": "Tracker reviews Crypto input, highlights signals, and flags risks.",
    "workflow": [
        "Parse crypto context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "crypto",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
