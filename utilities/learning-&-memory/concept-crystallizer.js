import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "concept-crystallizer",
    "name": "Concept Crystallizer",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "crystallizer",
    "archetype": "coach",
    "domain": "Concept",
    "intent": "Crystallizer gives targeted Concept guidance with next actions.",
    "workflow": [
        "Assess concept baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "concept",
        "crystallizer"
    ]
};

export default createBespokeUtility(metadata);
