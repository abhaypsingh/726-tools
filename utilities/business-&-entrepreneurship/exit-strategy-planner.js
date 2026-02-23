import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "exit-strategy-planner",
    "name": "Exit Strategy Planner",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "planner",
    "archetype": "plan",
    "domain": "Exit Strategy",
    "intent": "Planner structures Exit Strategy input into a practical step-by-step plan.",
    "workflow": [
        "Define exit strategy objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "exit",
        "strategy",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
