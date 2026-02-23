import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "plot-planner",
    "name": "Plot Planner",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "planner",
    "archetype": "plan",
    "domain": "Plot",
    "intent": "Planner structures Plot input into a practical step-by-step plan.",
    "workflow": [
        "Define plot objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "plot",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
