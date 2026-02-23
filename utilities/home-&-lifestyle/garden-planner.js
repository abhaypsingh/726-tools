import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "garden-planner",
    "name": "Garden Planner",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "planner",
    "archetype": "plan",
    "domain": "Garden",
    "intent": "Planner structures Garden input into a practical step-by-step plan.",
    "workflow": [
        "Define garden objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "garden",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
