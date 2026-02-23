import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "renewal-recipe",
    "name": "Renewal Recipe",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "recipe",
    "archetype": "coach",
    "domain": "Renewal",
    "intent": "Recipe gives targeted Renewal guidance with next actions.",
    "workflow": [
        "Assess renewal baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "renewal",
        "recipe"
    ]
};

export default createBespokeUtility(metadata);
