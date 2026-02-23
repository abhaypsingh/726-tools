import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "maintenance-reminder",
    "name": "Maintenance Reminder",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "reminder",
    "archetype": "coach",
    "domain": "Maintenance",
    "intent": "Reminder gives targeted Maintenance guidance with next actions.",
    "workflow": [
        "Assess maintenance baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "maintenance",
        "reminder"
    ]
};

export default createBespokeUtility(metadata);
