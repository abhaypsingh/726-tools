import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "repair-guide",
    "name": "Repair Guide",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "guide",
    "archetype": "coach",
    "domain": "Repair",
    "intent": "Guide gives targeted Repair guidance with next actions.",
    "workflow": [
        "Assess repair baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "repair",
        "guide"
    ]
};

export default createBespokeUtility(metadata);
