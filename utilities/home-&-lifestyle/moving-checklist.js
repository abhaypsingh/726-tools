import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "moving-checklist",
    "name": "Moving Checklist",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "checklist",
    "archetype": "coach",
    "domain": "Moving",
    "intent": "Checklist gives targeted Moving guidance with next actions.",
    "workflow": [
        "Assess moving baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "moving",
        "checklist"
    ]
};

export default createBespokeUtility(metadata);
