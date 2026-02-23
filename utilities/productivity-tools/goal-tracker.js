import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "goal-tracker",
    "name": "Goal Tracker",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Goal",
    "intent": "Tracker reviews Goal input, highlights signals, and flags risks.",
    "workflow": [
        "Parse goal context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "goal",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
