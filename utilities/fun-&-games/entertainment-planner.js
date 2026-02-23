import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "entertainment-planner",
    "name": "Entertainment Planner",
    "category": "fun & games",
    "description": "A fun & games utility",
    "complexity": "advanced",
    "action": "planner",
    "archetype": "plan",
    "domain": "Entertainment",
    "intent": "Planner structures Entertainment input into a practical step-by-step plan.",
    "workflow": [
        "Define entertainment objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "entertainment",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
