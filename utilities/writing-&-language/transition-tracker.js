import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "transition-tracker",
    "name": "Transition Tracker",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Transition",
    "intent": "Tracker reviews Transition input, highlights signals, and flags risks.",
    "workflow": [
        "Parse transition context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "transition",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
