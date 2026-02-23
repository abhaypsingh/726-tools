import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "problem-particle-collider",
    "name": "Problem Particle Collider",
    "category": "thinking & planning",
    "description": "A powerful tool for thinking & planning tasks",
    "complexity": "advanced",
    "action": "collider",
    "archetype": "coach",
    "domain": "Problem Particle",
    "intent": "Collider gives targeted Problem Particle guidance with next actions.",
    "workflow": [
        "Assess problem particle baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "problem",
        "particle",
        "collider"
    ]
};

export default createBespokeUtility(metadata);
