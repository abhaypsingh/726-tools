import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "flow-tracker",
    "name": "Flow Tracker",
    "category": "productivity & focus",
    "description": "A productivity & focus utility",
    "complexity": "advanced",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Flow",
    "intent": "Tracker reviews Flow input, highlights signals, and flags risks.",
    "workflow": [
        "Parse flow context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "flow",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
