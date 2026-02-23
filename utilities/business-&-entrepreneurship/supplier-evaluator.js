import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "supplier-evaluator",
    "name": "Supplier Evaluator",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "evaluator",
    "archetype": "coach",
    "domain": "Supplier",
    "intent": "Evaluator gives targeted Supplier guidance with next actions.",
    "workflow": [
        "Assess supplier baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "supplier",
        "evaluator"
    ]
};

export default createBespokeUtility(metadata);
