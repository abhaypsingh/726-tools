import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "presence-practice",
    "name": "Presence Practice",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "practice",
    "archetype": "coach",
    "domain": "Presence",
    "intent": "Practice gives targeted Presence guidance with next actions.",
    "workflow": [
        "Assess presence baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "presence",
        "practice"
    ]
};

export default createBespokeUtility(metadata);
