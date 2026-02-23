import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "future-planner",
    "name": "Future Planner",
    "category": "life management",
    "description": "A life management utility",
    "complexity": "advanced",
    "action": "planner",
    "archetype": "plan",
    "domain": "Future",
    "intent": "Planner structures Future input into a practical step-by-step plan.",
    "workflow": [
        "Define future objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "future",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
