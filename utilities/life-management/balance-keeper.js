import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "balance-keeper",
    "name": "Balance Keeper",
    "category": "life management",
    "description": "A life management utility",
    "complexity": "advanced",
    "action": "keeper",
    "archetype": "coach",
    "domain": "Balance",
    "intent": "Keeper gives targeted Balance guidance with next actions.",
    "workflow": [
        "Assess balance baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "balance",
        "keeper"
    ]
};

export default createBespokeUtility(metadata);
