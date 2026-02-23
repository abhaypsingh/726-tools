import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "communication-planner",
    "name": "Communication Planner",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "planner",
    "archetype": "plan",
    "domain": "Communication",
    "intent": "Planner structures Communication input into a practical step-by-step plan.",
    "workflow": [
        "Define communication objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "communication",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
