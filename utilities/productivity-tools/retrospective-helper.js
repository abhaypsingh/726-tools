import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "retrospective-helper",
    "name": "Retrospective Helper",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "assistant",
    "archetype": "coach",
    "domain": "Retrospective",
    "intent": "Assistant gives targeted Retrospective guidance with next actions.",
    "workflow": [
        "Assess retrospective baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "retrospective",
        "helper"
    ]
};

export default createBespokeUtility(metadata);
