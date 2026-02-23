import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "blog-builder",
    "name": "Blog Builder",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "builder",
    "archetype": "plan",
    "domain": "Blog",
    "intent": "Builder structures Blog input into a practical step-by-step plan.",
    "workflow": [
        "Define blog objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "blog",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
