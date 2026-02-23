import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "insight-irrigator",
    "name": "Insight Irrigator",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "irrigator",
    "archetype": "coach",
    "domain": "Insight",
    "intent": "Irrigator gives targeted Insight guidance with next actions.",
    "workflow": [
        "Assess insight baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "insight",
        "irrigator"
    ]
};

export default createBespokeUtility(metadata);
