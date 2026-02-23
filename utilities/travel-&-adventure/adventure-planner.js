import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "adventure-planner",
    "name": "Adventure Planner",
    "category": "travel & adventure",
    "description": "A travel & adventure utility",
    "complexity": "advanced",
    "action": "planner",
    "archetype": "plan",
    "domain": "Adventure",
    "intent": "Planner structures Adventure input into a practical step-by-step plan.",
    "workflow": [
        "Define adventure objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "adventure",
        "planner"
    ]
};

export default createBespokeUtility(metadata);
