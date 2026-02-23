import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "understanding-umbrella",
    "name": "Understanding Umbrella",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "umbrella",
    "archetype": "coach",
    "domain": "Understanding",
    "intent": "Umbrella gives targeted Understanding guidance with next actions.",
    "workflow": [
        "Assess understanding baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "understanding",
        "umbrella"
    ]
};

export default createBespokeUtility(metadata);
