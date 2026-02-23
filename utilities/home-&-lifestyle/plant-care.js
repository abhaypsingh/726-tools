import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "plant-care",
    "name": "Plant Care",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "care",
    "archetype": "coach",
    "domain": "Plant",
    "intent": "Care gives targeted Plant guidance with next actions.",
    "workflow": [
        "Assess plant baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "plant",
        "care"
    ]
};

export default createBespokeUtility(metadata);
