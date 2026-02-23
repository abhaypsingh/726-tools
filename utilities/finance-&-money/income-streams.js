import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "income-streams",
    "name": "Income Streams",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "streams",
    "archetype": "coach",
    "domain": "Income",
    "intent": "Streams gives targeted Income guidance with next actions.",
    "workflow": [
        "Assess income baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "income",
        "streams"
    ]
};

export default createBespokeUtility(metadata);
