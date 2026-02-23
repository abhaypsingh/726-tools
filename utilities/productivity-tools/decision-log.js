import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "decision-log",
    "name": "Decision Log",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "log",
    "archetype": "coach",
    "domain": "Decision",
    "intent": "Log gives targeted Decision guidance with next actions.",
    "workflow": [
        "Assess decision baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "decision",
        "log"
    ]
};

export default createBespokeUtility(metadata);
