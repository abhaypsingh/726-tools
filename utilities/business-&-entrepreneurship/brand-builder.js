import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "brand-builder",
    "name": "Brand Builder",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "builder",
    "archetype": "plan",
    "domain": "Brand",
    "intent": "Builder structures Brand input into a practical step-by-step plan.",
    "workflow": [
        "Define brand objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "brand",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
