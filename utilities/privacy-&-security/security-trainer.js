import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "security-trainer",
    "name": "Security Trainer",
    "category": "privacy & security",
    "description": "A privacy & security utility",
    "complexity": "advanced",
    "action": "trainer",
    "archetype": "coach",
    "domain": "Security",
    "intent": "Trainer gives targeted Security guidance with next actions.",
    "workflow": [
        "Assess security baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "security",
        "trainer"
    ]
};

export default createBespokeUtility(metadata);
