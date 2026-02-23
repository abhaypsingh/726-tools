import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "space-maximizer",
    "name": "Space Maximizer",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "maximizer",
    "archetype": "coach",
    "domain": "Space",
    "intent": "Maximizer gives targeted Space guidance with next actions.",
    "workflow": [
        "Assess space baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "space",
        "maximizer"
    ]
};

export default createBespokeUtility(metadata);
