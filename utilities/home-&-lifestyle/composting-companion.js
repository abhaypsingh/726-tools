import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "composting-companion",
    "name": "Composting Companion",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "companion",
    "archetype": "coach",
    "domain": "Composting",
    "intent": "Companion gives targeted Composting guidance with next actions.",
    "workflow": [
        "Assess composting baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "composting",
        "companion"
    ]
};

export default createBespokeUtility(metadata);
