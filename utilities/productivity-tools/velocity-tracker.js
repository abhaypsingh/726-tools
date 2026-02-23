import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "velocity-tracker",
    "name": "Velocity Tracker",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Velocity",
    "intent": "Tracker reviews Velocity input, highlights signals, and flags risks.",
    "workflow": [
        "Parse velocity context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "velocity",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
