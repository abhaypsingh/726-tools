import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "anniversary-alert",
    "name": "Anniversary Alert",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "alert",
    "archetype": "coach",
    "domain": "Anniversary",
    "intent": "Alert gives targeted Anniversary guidance with next actions.",
    "workflow": [
        "Assess anniversary baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "anniversary",
        "alert"
    ]
};

export default createBespokeUtility(metadata);
