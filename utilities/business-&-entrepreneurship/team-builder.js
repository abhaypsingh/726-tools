import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "team-builder",
    "name": "Team Builder",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "builder",
    "archetype": "plan",
    "domain": "Team",
    "intent": "Builder structures Team input into a practical step-by-step plan.",
    "workflow": [
        "Define team objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "team",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
