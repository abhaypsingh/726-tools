import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "home-security",
    "name": "Home Security",
    "category": "home & lifestyle",
    "description": "A home & lifestyle utility",
    "complexity": "advanced",
    "action": "security",
    "archetype": "coach",
    "domain": "Home",
    "intent": "Security gives targeted Home guidance with next actions.",
    "workflow": [
        "Assess home baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "home",
        "security"
    ]
};

export default createBespokeUtility(metadata);
