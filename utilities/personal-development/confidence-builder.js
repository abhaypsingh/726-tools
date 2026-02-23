import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "confidence-builder",
    "name": "Confidence Builder",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "builder",
    "archetype": "plan",
    "domain": "Confidence",
    "intent": "Builder structures Confidence input into a practical step-by-step plan.",
    "workflow": [
        "Define confidence objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "confidence",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
