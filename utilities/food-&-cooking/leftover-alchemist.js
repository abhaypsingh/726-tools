import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "leftover-alchemist",
    "name": "Leftover Alchemist",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "alchemist",
    "archetype": "coach",
    "domain": "Leftover",
    "intent": "Alchemist gives targeted Leftover guidance with next actions.",
    "workflow": [
        "Assess leftover baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "leftover",
        "alchemist"
    ]
};

export default createBespokeUtility(metadata);
