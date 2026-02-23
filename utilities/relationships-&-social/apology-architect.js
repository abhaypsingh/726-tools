import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "apology-architect",
    "name": "Apology Architect",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "architect",
    "archetype": "plan",
    "domain": "Apology",
    "intent": "Architect structures Apology input into a practical step-by-step plan.",
    "workflow": [
        "Define apology objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "apology",
        "architect"
    ]
};

export default createBespokeUtility(metadata);
