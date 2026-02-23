import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "backup-reminder",
    "name": "Backup Reminder",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "reminder",
    "archetype": "coach",
    "domain": "Backup",
    "intent": "Reminder gives targeted Backup guidance with next actions.",
    "workflow": [
        "Assess backup baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "backup",
        "reminder"
    ]
};

export default createBespokeUtility(metadata);
