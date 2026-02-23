import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "emergency-kit",
    "name": "Emergency Kit",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "kit",
    "archetype": "coach",
    "domain": "Emergency",
    "intent": "Kit gives targeted Emergency guidance with next actions.",
    "workflow": [
        "Assess emergency baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "emergency",
        "kit"
    ]
};

export default createBespokeUtility(metadata);
