import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "life-dashboard",
    "name": "Life Dashboard",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "dashboard",
    "archetype": "coach",
    "domain": "Life",
    "intent": "Dashboard gives targeted Life guidance with next actions.",
    "workflow": [
        "Assess life baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "life",
        "dashboard"
    ]
};

export default createBespokeUtility(metadata);
