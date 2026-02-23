import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "obstacle-oracle",
    "name": "Obstacle Oracle",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "advisor",
    "archetype": "coach",
    "domain": "Obstacle",
    "intent": "Advisor gives targeted Obstacle guidance with next actions.",
    "workflow": [
        "Assess obstacle baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "obstacle",
        "oracle"
    ]
};

export default createBespokeUtility(metadata);
