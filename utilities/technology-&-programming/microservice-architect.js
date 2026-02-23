import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "microservice-architect",
    "name": "Microservice Architect",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "architect",
    "archetype": "plan",
    "domain": "Microservice",
    "intent": "Architect structures Microservice input into a practical step-by-step plan.",
    "workflow": [
        "Define microservice objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "microservice",
        "architect"
    ]
};

export default createBespokeUtility(metadata);
