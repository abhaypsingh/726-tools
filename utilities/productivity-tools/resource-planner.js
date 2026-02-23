import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "resource-planner",
    "name": "Resource Planner",
    "category": "productivity tools",
    "description": "A productivity tools utility",
    "complexity": "advanced",
    "action": "planner",
    "archetype": "plan",
    "domain": "Resource",
    "intent": "Planner structures Resource input into a practical step-by-step plan.",
    "workflow": [
        "Define resource objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "resource",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
