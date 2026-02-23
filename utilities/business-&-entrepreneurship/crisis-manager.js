import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "crisis-manager",
    "name": "Crisis Manager",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "manager",
    "archetype": "plan",
    "domain": "Crisis",
    "intent": "Manager structures Crisis input into a practical step-by-step plan.",
    "workflow": [
        "Define crisis objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "crisis",
        "manager"
    ]
};

export default createBespokeUtility(metadata);
