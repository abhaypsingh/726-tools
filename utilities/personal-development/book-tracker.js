import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "book-tracker",
    "name": "Book Tracker",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Book",
    "intent": "Tracker reviews Book input, highlights signals, and flags risks.",
    "workflow": [
        "Parse book context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "book",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
