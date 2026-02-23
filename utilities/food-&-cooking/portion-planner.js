import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "portion-planner",
    "name": "Portion Planner",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "planner",
    "archetype": "plan",
    "domain": "Portion",
    "intent": "Planner structures Portion input into a practical step-by-step plan.",
    "workflow": [
        "Define portion objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "portion",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
