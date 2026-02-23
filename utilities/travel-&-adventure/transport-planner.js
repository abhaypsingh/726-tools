import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "transport-planner",
    "name": "Transport Planner",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "planner",
    "archetype": "plan",
    "domain": "Transport",
    "intent": "Planner structures Transport input into a practical step-by-step plan.",
    "workflow": [
        "Define transport objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "transport",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
