import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "meal-planner-pro",
    "name": "Meal Planner Pro",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "planner",
    "archetype": "plan",
    "domain": "Meal",
    "intent": "Planner structures Meal input into a practical step-by-step plan.",
    "workflow": [
        "Define meal objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "meal",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
