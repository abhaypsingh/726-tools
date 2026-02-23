import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "risk-assessor",
    "name": "Risk Assessor",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "assessor",
    "archetype": "coach",
    "domain": "Risk",
    "intent": "Assessor gives targeted Risk guidance with next actions.",
    "workflow": [
        "Assess risk baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "risk",
        "assessor"
    ]
};

export default createBespokeUtility(metadata);
