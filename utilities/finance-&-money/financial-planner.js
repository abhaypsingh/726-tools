import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "financial-planner",
    "name": "Financial Planner",
    "category": "finance & money",
    "description": "A finance & money utility",
    "complexity": "advanced",
    "action": "planner",
    "archetype": "plan",
    "domain": "Financial",
    "intent": "Planner structures Financial input into a practical step-by-step plan.",
    "workflow": [
        "Define financial objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "financial",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
