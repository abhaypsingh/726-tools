import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "guest-list-manager",
    "name": "Guest List Manager",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "manager",
    "archetype": "plan",
    "domain": "Guest List",
    "intent": "Manager structures Guest List input into a practical step-by-step plan.",
    "workflow": [
        "Define guest list objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "guest",
        "list",
        "manager"
    ]
};

export default createBespokeUtility(metadata);
