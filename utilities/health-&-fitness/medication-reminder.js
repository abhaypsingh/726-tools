import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "medication-reminder",
    "name": "Medication Reminder",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "reminder",
    "archetype": "coach",
    "domain": "Medication",
    "intent": "Reminder gives targeted Medication guidance with next actions.",
    "workflow": [
        "Assess medication baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "medication",
        "reminder"
    ]
};

export default createBespokeUtility(metadata);
