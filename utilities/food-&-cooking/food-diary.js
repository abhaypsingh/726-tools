import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "food-diary",
    "name": "Food Diary",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "diary",
    "archetype": "coach",
    "domain": "Food",
    "intent": "Diary gives targeted Food guidance with next actions.",
    "workflow": [
        "Assess food baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "food",
        "diary"
    ]
};

export default createBespokeUtility(metadata);
