import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "skill-tracker",
    "name": "Skill Tracker",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "tracker",
    "archetype": "inspect",
    "domain": "Skill",
    "intent": "Tracker reviews Skill input, highlights signals, and flags risks.",
    "workflow": [
        "Parse skill context",
        "Identify key patterns",
        "Flag constraints and risks",
        "Propose corrective actions"
    ],
    "inputHint": "Paste items, notes, or data to analyze.",
    "focusTerms": [
        "skill",
        "tracker"
    ]
};

export default createBespokeUtility(metadata);
