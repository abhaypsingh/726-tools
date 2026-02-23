import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "energy-manager",
    "name": "Energy Manager",
    "category": "productivity & focus",
    "description": "A productivity & focus utility",
    "complexity": "advanced",
    "action": "manager",
    "archetype": "plan",
    "domain": "Energy",
    "intent": "Manager structures Energy input into a practical step-by-step plan.",
    "workflow": [
        "Define energy objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "energy",
        "manager"
    ]
};

export default createBespokeUtility(metadata);
