import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "retirement-planner",
    "name": "Retirement Planner",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "planner",
    "archetype": "plan",
    "domain": "Retirement",
    "intent": "Planner structures Retirement input into a practical step-by-step plan.",
    "workflow": [
        "Define retirement objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "retirement",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
