import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "average-architect",
    "name": "Average Architect",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "architect",
    "archetype": "plan",
    "domain": "Average",
    "intent": "Architect structures Average input into a practical step-by-step plan.",
    "workflow": [
        "Define average objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "average",
        "architect"
    ]
};

export default createBespokeUtility(metadata);
