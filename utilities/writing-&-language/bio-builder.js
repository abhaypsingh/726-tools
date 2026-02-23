import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "bio-builder",
    "name": "Bio Builder",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "builder",
    "archetype": "plan",
    "domain": "Bio",
    "intent": "Builder structures Bio input into a practical step-by-step plan.",
    "workflow": [
        "Define bio objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "bio",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
