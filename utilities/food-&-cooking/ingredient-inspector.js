import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "ingredient-inspector",
    "name": "Ingredient Inspector",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "inspector",
    "archetype": "coach",
    "domain": "Ingredient",
    "intent": "Inspector gives targeted Ingredient guidance with next actions.",
    "workflow": [
        "Assess ingredient baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "ingredient",
        "inspector"
    ]
};

export default createBespokeUtility(metadata);
