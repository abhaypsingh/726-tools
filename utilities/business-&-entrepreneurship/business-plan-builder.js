import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "business-plan-builder",
    "name": "Business Plan Builder",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "intermediate",
    "action": "builder",
    "archetype": "plan",
    "domain": "Business Plan",
    "intent": "Builder structures Business Plan input into a practical step-by-step plan.",
    "workflow": [
        "Define business plan objective",
        "Split work into phases",
        "Order by dependency and impact",
        "Assign clear execution steps"
    ],
    "inputHint": "Describe goal, constraints, and deadline.",
    "focusTerms": [
        "business",
        "plan",
        "builder"
    ]
};

export default createBespokeUtility(metadata);
