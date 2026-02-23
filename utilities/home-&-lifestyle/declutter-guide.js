import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "declutter-guide",
    "name": "Declutter Guide",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "guide",
    "archetype": "coach",
    "domain": "Declutter",
    "intent": "Guide gives targeted Declutter guidance with next actions.",
    "workflow": [
        "Assess declutter baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "declutter",
        "guide"
    ]
};

export default createBespokeUtility(metadata);
