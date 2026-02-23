import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "meeting-scheduler",
    "name": "Meeting Scheduler",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "scheduler",
    "archetype": "plan",
    "domain": "Meeting",
    "intent": "Scheduler structures Meeting input into a practical step-by-step plan.",
    "workflow": [
        "Define meeting objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "meeting",
        "scheduler"
    ]
};

export default createBespokeUtility(metadata);
