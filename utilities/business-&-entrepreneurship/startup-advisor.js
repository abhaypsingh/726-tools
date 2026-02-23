import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "startup-advisor",
    "name": "Startup Advisor",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "advisor",
    "archetype": "coach",
    "domain": "Startup",
    "intent": "Advisor gives targeted Startup guidance with next actions.",
    "workflow": [
        "Assess startup baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "startup",
        "advisor"
    ]
};

export default createBespokeUtility(metadata);
