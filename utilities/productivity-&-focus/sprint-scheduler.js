import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "sprint-scheduler",
    "name": "Sprint Scheduler",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "scheduler",
    "archetype": "plan",
    "domain": "Sprint",
    "intent": "Scheduler structures Sprint input into a practical step-by-step plan.",
    "workflow": [
        "Define sprint objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "sprint",
        "scheduler"
    ]
};

export default createBespokeUtility(metadata);
