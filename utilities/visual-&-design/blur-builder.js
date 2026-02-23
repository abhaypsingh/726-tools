import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "blur-builder",
    "name": "Blur Builder",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "builder",
    "archetype": "plan",
    "domain": "Blur",
    "intent": "Builder structures Blur input into a practical step-by-step plan.",
    "workflow": [
        "Define blur objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "blur",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
