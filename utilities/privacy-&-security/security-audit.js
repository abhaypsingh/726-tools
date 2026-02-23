import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "security-audit",
    "name": "Security Audit",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "audit",
    "archetype": "coach",
    "domain": "Security",
    "intent": "Audit gives targeted Security guidance with next actions.",
    "workflow": [
        "Assess security baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "security",
        "audit"
    ]
};

export default createBespokeUtility(metadata);
