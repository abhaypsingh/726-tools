import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "release-ritual",
    "name": "Release Ritual",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "ritual",
    "archetype": "coach",
    "domain": "Release",
    "intent": "Ritual gives targeted Release guidance with next actions.",
    "workflow": [
        "Assess release baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "release",
        "ritual"
    ]
};

export default createBespokeUtility(metadata);
