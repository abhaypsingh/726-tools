import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "budget-builder",
    "name": "Budget Builder",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "builder",
    "archetype": "plan",
    "domain": "Budget",
    "intent": "Builder structures Budget input into a practical step-by-step plan.",
    "workflow": [
        "Define budget objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "budget",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
