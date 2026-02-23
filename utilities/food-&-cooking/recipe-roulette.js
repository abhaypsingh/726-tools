import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "recipe-roulette",
    "name": "Recipe Roulette",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "roulette",
    "archetype": "coach",
    "domain": "Recipe",
    "intent": "Roulette gives targeted Recipe guidance with next actions.",
    "workflow": [
        "Assess recipe baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "recipe",
        "roulette"
    ]
};

export default createBespokeUtility(metadata);
