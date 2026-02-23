import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "conference-calendar",
    "name": "Conference Calendar",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "calendar",
    "archetype": "coach",
    "domain": "Conference",
    "intent": "Calendar gives targeted Conference guidance with next actions.",
    "workflow": [
        "Assess conference baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "conference",
        "calendar"
    ]
};

export default createBespokeUtility(metadata);
