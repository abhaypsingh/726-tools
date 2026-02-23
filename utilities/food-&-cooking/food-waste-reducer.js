import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "food-waste-reducer",
    "name": "Food Waste Reducer",
    "category": "food & cooking",
    "description": "A food & cooking utility",
    "complexity": "advanced",
    "action": "reducer",
    "archetype": "coach",
    "domain": "Food Waste",
    "intent": "Reducer gives targeted Food Waste guidance with next actions.",
    "workflow": [
        "Assess food waste baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "food",
        "waste",
        "reducer"
    ]
};

export default createBespokeUtility(metadata);
