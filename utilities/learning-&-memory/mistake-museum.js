import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mistake-museum",
    "name": "Mistake Museum",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "museum",
    "archetype": "coach",
    "domain": "Mistake",
    "intent": "Museum gives targeted Mistake guidance with next actions.",
    "workflow": [
        "Assess mistake baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "mistake",
        "museum"
    ]
};

export default createBespokeUtility(metadata);
