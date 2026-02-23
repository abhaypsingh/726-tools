import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "customer-lifetime-value",
    "name": "Customer Lifetime Value",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "value",
    "archetype": "coach",
    "domain": "Customer Lifetime",
    "intent": "Value gives targeted Customer Lifetime guidance with next actions.",
    "workflow": [
        "Assess customer lifetime baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "customer",
        "lifetime",
        "value"
    ]
};

export default createBespokeUtility(metadata);
