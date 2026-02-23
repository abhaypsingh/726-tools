import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "priority-manager",
    "name": "Priority Manager",
    "category": "life management",
    "description": "A life management utility",
    "complexity": "advanced",
    "action": "manager",
    "archetype": "plan",
    "domain": "Priority",
    "intent": "Manager structures Priority input into a practical step-by-step plan.",
    "workflow": [
        "Define priority objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "priority",
        "manager"
    ]
};

export default createBespokeUtility(metadata);
