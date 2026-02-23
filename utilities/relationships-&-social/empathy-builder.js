import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "empathy-builder",
    "name": "Empathy Builder",
    "category": "relationships & social",
    "description": "A relationships & social utility",
    "complexity": "advanced",
    "action": "builder",
    "archetype": "plan",
    "domain": "Empathy",
    "intent": "Builder structures Empathy input into a practical step-by-step plan.",
    "workflow": [
        "Define empathy objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "empathy",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
