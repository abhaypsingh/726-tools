import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "curiosity-catalyst",
    "name": "Curiosity Catalyst",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "catalyst",
    "archetype": "coach",
    "domain": "Curiosity",
    "intent": "Catalyst gives targeted Curiosity guidance with next actions.",
    "workflow": [
        "Assess curiosity baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "curiosity",
        "catalyst"
    ]
};

export default createBespokeUtility(metadata);
