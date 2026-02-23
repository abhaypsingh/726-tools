import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "batch-builder",
    "name": "Batch Builder",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "builder",
    "archetype": "plan",
    "domain": "Batch",
    "intent": "Builder structures Batch input into a practical step-by-step plan.",
    "workflow": [
        "Define batch objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "batch",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
