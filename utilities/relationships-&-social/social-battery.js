import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "social-battery",
    "name": "Social Battery",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "battery",
    "archetype": "coach",
    "domain": "Social",
    "intent": "Battery gives targeted Social guidance with next actions.",
    "workflow": [
        "Assess social baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "social",
        "battery"
    ]
};

export default createBespokeUtility(metadata);
