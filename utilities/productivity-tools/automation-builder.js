import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "automation-builder",
    "name": "Automation Builder",
    "category": "productivity tools",
    "description": "A productivity tools utility",
    "complexity": "advanced",
    "action": "builder",
    "archetype": "plan",
    "domain": "Automation",
    "intent": "Builder structures Automation input into a practical step-by-step plan.",
    "workflow": [
        "Define automation objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "automation",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
