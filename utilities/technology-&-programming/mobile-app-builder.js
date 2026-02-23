import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mobile-app-builder",
    "name": "Mobile App Builder",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "builder",
    "archetype": "plan",
    "domain": "Mobile App",
    "intent": "Builder structures Mobile App input into a practical step-by-step plan.",
    "workflow": [
        "Define mobile app objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "mobile",
        "app",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
