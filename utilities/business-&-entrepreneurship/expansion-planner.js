import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "expansion-planner",
    "name": "Expansion Planner",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "planner",
    "archetype": "plan",
    "domain": "Expansion",
    "intent": "Planner structures Expansion input into a practical step-by-step plan.",
    "workflow": [
        "Define expansion objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "expansion",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
