import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "analogy-architect",
    "name": "Analogy Architect",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "architect",
    "archetype": "plan",
    "domain": "Analogy",
    "intent": "Architect structures Analogy input into a practical step-by-step plan.",
    "workflow": [
        "Define analogy objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "analogy",
        "architect"
    ]
};

export default createBespokeUtility(metadata);
