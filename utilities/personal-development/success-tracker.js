import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "success-tracker",
    "name": "Success Tracker",
    "category": "personal development",
    "description": "A personal development utility",
    "complexity": "advanced",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Success",
    "intent": "Tracker reviews Success input, highlights signals, and flags risks.",
    "workflow": [
        "Parse success context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "success",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
