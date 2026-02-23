import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "sprint-planner",
    "name": "Sprint Planner",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "planner",
    "archetype": "plan",
    "domain": "Sprint",
    "intent": "Planner structures Sprint input into a practical step-by-step plan.",
    "workflow": [
        "Define sprint objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "sprint",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
