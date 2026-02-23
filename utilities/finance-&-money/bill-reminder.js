import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "bill-reminder",
    "name": "Bill Reminder",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "reminder",
    "archetype": "coach",
    "domain": "Bill",
    "intent": "Reminder gives targeted Bill guidance with next actions.",
    "workflow": [
        "Assess bill baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "bill",
        "reminder"
    ]
};

export default createBespokeUtility(metadata);
