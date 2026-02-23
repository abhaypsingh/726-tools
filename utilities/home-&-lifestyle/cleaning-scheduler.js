import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "cleaning-scheduler",
    "name": "Cleaning Scheduler",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "scheduler",
    "archetype": "plan",
    "domain": "Cleaning",
    "intent": "Scheduler structures Cleaning input into a practical step-by-step plan.",
    "workflow": [
        "Define cleaning objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "cleaning",
        "scheduler"
    ]
};

export default createBespokeUtility(metadata);
