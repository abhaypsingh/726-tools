import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "boundary-builder",
    "name": "Boundary Builder",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "builder",
    "archetype": "plan",
    "domain": "Boundary",
    "intent": "Builder structures Boundary input into a practical step-by-step plan.",
    "workflow": [
        "Define boundary objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "boundary",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
