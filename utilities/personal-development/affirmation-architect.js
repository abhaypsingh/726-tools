import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "affirmation-architect",
    "name": "Affirmation Architect",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "architect",
    "archetype": "plan",
    "domain": "Affirmation",
    "intent": "Architect structures Affirmation input into a practical step-by-step plan.",
    "workflow": [
        "Define affirmation objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "affirmation",
        "architect"
    ]
};

export default createBespokeUtility(metadata);
