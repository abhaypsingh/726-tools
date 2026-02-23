import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "brainstorm-buddy",
    "name": "Brainstorm Buddy",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "assistant",
    "archetype": "coach",
    "domain": "Brainstorm",
    "intent": "Assistant gives targeted Brainstorm guidance with next actions.",
    "workflow": [
        "Assess brainstorm baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "brainstorm",
        "buddy"
    ]
};

export default createBespokeUtility(metadata);
