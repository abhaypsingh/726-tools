import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "recovery-planner",
    "name": "Recovery Planner",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "planner",
    "archetype": "plan",
    "domain": "Recovery",
    "intent": "Planner structures Recovery input into a practical step-by-step plan.",
    "workflow": [
        "Define recovery objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "recovery",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
