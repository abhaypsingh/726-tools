import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "restaurant-roulette",
    "name": "Restaurant Roulette",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "roulette",
    "archetype": "coach",
    "domain": "Restaurant",
    "intent": "Roulette gives targeted Restaurant guidance with next actions.",
    "workflow": [
        "Assess restaurant baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "restaurant",
        "roulette"
    ]
};

export default createBespokeUtility(metadata);
