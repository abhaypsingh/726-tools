import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "estimation-helper",
    "name": "Estimation Helper",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "assistant",
    "archetype": "coach",
    "domain": "Estimation",
    "intent": "Assistant gives targeted Estimation guidance with next actions.",
    "workflow": [
        "Assess estimation baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "estimation",
        "helper"
    ]
};

export default createBespokeUtility(metadata);
