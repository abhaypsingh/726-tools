import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "capacity-planner",
    "name": "Capacity Planner",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "planner",
    "archetype": "plan",
    "domain": "Capacity",
    "intent": "Planner structures Capacity input into a practical step-by-step plan.",
    "workflow": [
        "Define capacity objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "capacity",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
