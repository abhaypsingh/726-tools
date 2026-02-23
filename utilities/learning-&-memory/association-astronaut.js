import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "association-astronaut",
    "name": "Association Astronaut",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "astronaut",
    "archetype": "coach",
    "domain": "Association",
    "intent": "Astronaut gives targeted Association guidance with next actions.",
    "workflow": [
        "Assess association baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "association",
        "astronaut"
    ]
};

export default createBespokeUtility(metadata);
