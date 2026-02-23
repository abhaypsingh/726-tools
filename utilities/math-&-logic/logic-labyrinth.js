import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "logic-labyrinth",
    "name": "Logic Labyrinth",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "labyrinth",
    "archetype": "coach",
    "domain": "Logic",
    "intent": "Labyrinth gives targeted Logic guidance with next actions.",
    "workflow": [
        "Assess logic baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "logic",
        "labyrinth"
    ]
};

export default createBespokeUtility(metadata);
