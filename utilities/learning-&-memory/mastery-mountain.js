import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mastery-mountain",
    "name": "Mastery Mountain",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "mountain",
    "archetype": "coach",
    "domain": "Mastery",
    "intent": "Mountain gives targeted Mastery guidance with next actions.",
    "workflow": [
        "Assess mastery baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "mastery",
        "mountain"
    ]
};

export default createBespokeUtility(metadata);
