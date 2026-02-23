import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "manual-library",
    "name": "Manual Library",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "library",
    "archetype": "coach",
    "domain": "Manual",
    "intent": "Library gives targeted Manual guidance with next actions.",
    "workflow": [
        "Assess manual baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "manual",
        "library"
    ]
};

export default createBespokeUtility(metadata);
