import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "portfolio-builder",
    "name": "Portfolio Builder",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "builder",
    "archetype": "plan",
    "domain": "Portfolio",
    "intent": "Builder structures Portfolio input into a practical step-by-step plan.",
    "workflow": [
        "Define portfolio objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "portfolio",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
