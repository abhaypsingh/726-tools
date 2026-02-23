import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "smart-home-manager",
    "name": "Smart Home Manager",
    "category": "home & lifestyle",
    "description": "A home & lifestyle utility",
    "complexity": "advanced",
    "action": "manager",
    "archetype": "plan",
    "domain": "Home",
    "intent": "Manager structures Home input into a practical step-by-step plan.",
    "workflow": [
        "Define home objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "home",
        "manager"
    ]
};

export default createBespokeUtility(metadata);
