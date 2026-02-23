import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "explanation-engine",
    "name": "Explanation Engine",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "engine",
    "archetype": "coach",
    "domain": "Explanation",
    "intent": "Engine gives targeted Explanation guidance with next actions.",
    "workflow": [
        "Assess explanation baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "explanation",
        "engine"
    ]
};

export default createBespokeUtility(metadata);
