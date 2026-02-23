import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "burndown-builder",
    "name": "Burndown Builder",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "builder",
    "archetype": "plan",
    "domain": "Burndown",
    "intent": "Builder structures Burndown input into a practical step-by-step plan.",
    "workflow": [
        "Define burndown objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "burndown",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
