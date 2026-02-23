import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "quest-log",
    "name": "Quest Log",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "log",
    "archetype": "coach",
    "domain": "Quest",
    "intent": "Log gives targeted Quest guidance with next actions.",
    "workflow": [
        "Assess quest baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "quest",
        "log"
    ]
};

export default createBespokeUtility(metadata);
