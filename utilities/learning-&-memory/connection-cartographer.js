import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "connection-cartographer",
    "name": "Connection Cartographer",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "cartographer",
    "archetype": "coach",
    "domain": "Connection",
    "intent": "Cartographer gives targeted Connection guidance with next actions.",
    "workflow": [
        "Assess connection baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "connection",
        "cartographer"
    ]
};

export default createBespokeUtility(metadata);
