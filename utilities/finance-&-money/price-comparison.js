import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "price-comparison",
    "name": "Price Comparison",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "comparison",
    "archetype": "coach",
    "domain": "Price",
    "intent": "Comparison gives targeted Price guidance with next actions.",
    "workflow": [
        "Assess price baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "price",
        "comparison"
    ]
};

export default createBespokeUtility(metadata);
