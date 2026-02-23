import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "credit-score-guide",
    "name": "Credit Score Guide",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "guide",
    "archetype": "coach",
    "domain": "Credit Score",
    "intent": "Guide gives targeted Credit Score guidance with next actions.",
    "workflow": [
        "Assess credit score baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "credit",
        "score",
        "guide"
    ]
};

export default createBespokeUtility(metadata);
