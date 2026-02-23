import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "math-tutor",
    "name": "Math Tutor",
    "category": "math & logic",
    "description": "A math & logic utility",
    "complexity": "advanced",
    "action": "tutor",
    "archetype": "coach",
    "domain": "Math",
    "intent": "Tutor gives targeted Math guidance with next actions.",
    "workflow": [
        "Assess math baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "math",
        "tutor"
    ]
};

export default createBespokeUtility(metadata);
