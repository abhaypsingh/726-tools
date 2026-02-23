import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "forgiveness-facilitator",
    "name": "Forgiveness Facilitator",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "facilitator",
    "archetype": "coach",
    "domain": "Forgiveness",
    "intent": "Facilitator gives targeted Forgiveness guidance with next actions.",
    "workflow": [
        "Assess forgiveness baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "forgiveness",
        "facilitator"
    ]
};

export default createBespokeUtility(metadata);
