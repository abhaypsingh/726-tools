import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "franchise-evaluator",
    "name": "Franchise Evaluator",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "evaluator",
    "archetype": "coach",
    "domain": "Franchise",
    "intent": "Evaluator gives targeted Franchise guidance with next actions.",
    "workflow": [
        "Assess franchise baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "franchise",
        "evaluator"
    ]
};

export default createBespokeUtility(metadata);
