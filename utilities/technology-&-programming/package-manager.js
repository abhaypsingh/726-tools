import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "package-manager",
    "name": "Package Manager",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "manager",
    "archetype": "plan",
    "domain": "Package",
    "intent": "Manager structures Package input into a practical step-by-step plan.",
    "workflow": [
        "Define package objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "package",
        "manager"
    ]
};

export default createBespokeUtility(metadata);
