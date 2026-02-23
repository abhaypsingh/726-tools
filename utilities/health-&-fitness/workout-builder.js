import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "workout-builder",
    "name": "Workout Builder",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "builder",
    "archetype": "plan",
    "domain": "Workout",
    "intent": "Builder structures Workout input into a practical step-by-step plan.",
    "workflow": [
        "Define workout objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "workout",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
