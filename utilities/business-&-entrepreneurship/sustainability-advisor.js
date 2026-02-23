import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "sustainability-advisor",
    "name": "Sustainability Advisor",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "advisor",
    "archetype": "coach",
    "domain": "Sustainability",
    "intent": "Advisor gives targeted Sustainability guidance with next actions.",
    "workflow": [
        "Assess sustainability baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "sustainability",
        "advisor"
    ]
};

export default createBespokeUtility(metadata);
