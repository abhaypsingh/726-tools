import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "tor-guide",
    "name": "Tor Guide",
    "category": "privacy & security",
    "description": "A powerful tool for privacy & security tasks",
    "complexity": "intermediate",
    "action": "guide",
    "archetype": "coach",
    "domain": "Tor",
    "intent": "Guide gives targeted Tor guidance with next actions.",
    "workflow": [
        "Assess tor baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "tor",
        "guide"
    ]
};

export default createBespokeUtility(metadata);
