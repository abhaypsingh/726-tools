import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "automation-architect",
    "name": "Automation Architect",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "architect",
    "archetype": "plan",
    "domain": "Automation",
    "intent": "Architect structures Automation input into a practical step-by-step plan.",
    "workflow": [
        "Define automation objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "automation",
        "architect"
    ]
};

export default createBespokeUtility(metadata);
