import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "balance-barometer",
    "name": "Balance Barometer",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "barometer",
    "archetype": "coach",
    "domain": "Balance",
    "intent": "Barometer gives targeted Balance guidance with next actions.",
    "workflow": [
        "Assess balance baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "balance",
        "barometer"
    ]
};

export default createBespokeUtility(metadata);
