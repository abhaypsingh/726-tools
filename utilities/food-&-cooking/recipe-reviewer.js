import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "recipe-reviewer",
    "name": "Recipe Reviewer",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "reviewer",
    "archetype": "coach",
    "domain": "Recipe",
    "intent": "Reviewer gives targeted Recipe guidance with next actions.",
    "workflow": [
        "Assess recipe baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "recipe",
        "reviewer"
    ]
};

export default createBespokeUtility(metadata);
