import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "privacy-checkup",
    "name": "Privacy Checkup",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "checkup",
    "archetype": "coach",
    "domain": "Privacy",
    "intent": "Checkup gives targeted Privacy guidance with next actions.",
    "workflow": [
        "Assess privacy baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "privacy",
        "checkup"
    ]
};

export default createBespokeUtility(metadata);
