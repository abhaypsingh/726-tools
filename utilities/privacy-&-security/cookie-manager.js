import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "cookie-manager",
    "name": "Cookie Manager",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "manager",
    "archetype": "plan",
    "domain": "Cookie",
    "intent": "Manager structures Cookie input into a practical step-by-step plan.",
    "workflow": [
        "Define cookie objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "cookie",
        "manager"
    ]
};

export default createBespokeUtility(metadata);
