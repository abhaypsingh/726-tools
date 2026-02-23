import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "supplement-scheduler",
    "name": "Supplement Scheduler",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "scheduler",
    "archetype": "plan",
    "domain": "Supplement",
    "intent": "Scheduler structures Supplement input into a practical step-by-step plan.",
    "workflow": [
        "Define supplement objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "supplement",
        "scheduler"
    ]
};

export default createBespokeUtility(metadata);
