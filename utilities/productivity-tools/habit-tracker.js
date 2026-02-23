import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "habit-tracker",
    "name": "Habit Tracker",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Habit",
    "intent": "Tracker reviews Habit input, highlights signals, and flags risks.",
    "workflow": [
        "Parse habit context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "habit",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
