import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "waste-reducer",
    "name": "Waste Reducer",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "reducer",
    "archetype": "coach",
    "domain": "Waste",
    "intent": "Reducer gives targeted Waste guidance with next actions.",
    "workflow": [
        "Assess waste baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "waste",
        "reducer"
    ]
};

export default createBespokeUtility(metadata);
