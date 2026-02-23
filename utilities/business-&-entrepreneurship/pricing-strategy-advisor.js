import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "pricing-strategy-advisor",
    "name": "Pricing Strategy Advisor",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "advisor",
    "archetype": "coach",
    "domain": "Pricing Strategy",
    "intent": "Advisor gives targeted Pricing Strategy guidance with next actions.",
    "workflow": [
        "Assess pricing strategy baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "pricing",
        "strategy",
        "advisor"
    ]
};

export default createBespokeUtility(metadata);
