import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "anonymous-browser",
    "name": "Anonymous Browser",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "browser",
    "archetype": "coach",
    "domain": "Anonymous",
    "intent": "Browser gives targeted Anonymous guidance with next actions.",
    "workflow": [
        "Assess anonymous baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "anonymous",
        "browser"
    ]
};

export default createBespokeUtility(metadata);
