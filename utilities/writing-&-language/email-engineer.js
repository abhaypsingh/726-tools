import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "email-engineer",
    "name": "Email Engineer",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "engineer",
    "archetype": "coach",
    "domain": "Email",
    "intent": "Engineer gives targeted Email guidance with next actions.",
    "workflow": [
        "Assess email baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "email",
        "engineer"
    ]
};

export default createBespokeUtility(metadata);
