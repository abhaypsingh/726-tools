import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "seasonal-tasks",
    "name": "Seasonal Tasks",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "tasks",
    "archetype": "coach",
    "domain": "Seasonal",
    "intent": "Tasks gives targeted Seasonal guidance with next actions.",
    "workflow": [
        "Assess seasonal baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "seasonal",
        "tasks"
    ]
};

export default createBespokeUtility(metadata);
