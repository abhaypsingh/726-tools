import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "side-project-manager",
    "name": "Side Project Manager",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "manager",
    "archetype": "plan",
    "domain": "Side Project",
    "intent": "Manager structures Side Project input into a practical step-by-step plan.",
    "workflow": [
        "Define side project objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "side",
        "project",
        "manager"
    ]
};

export default createBespokeUtility(metadata);
