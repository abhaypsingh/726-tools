import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "attention-architect",
    "name": "Attention Architect",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "architect",
    "archetype": "plan",
    "domain": "Attention",
    "intent": "Architect structures Attention input into a practical step-by-step plan.",
    "workflow": [
        "Define attention objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "attention",
        "architect"
    ]
};

export default createBespokeUtility(metadata);
