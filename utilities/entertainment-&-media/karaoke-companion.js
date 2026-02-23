import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "karaoke-companion",
    "name": "Karaoke Companion",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "companion",
    "archetype": "coach",
    "domain": "Karaoke",
    "intent": "Companion gives targeted Karaoke guidance with next actions.",
    "workflow": [
        "Assess karaoke baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "karaoke",
        "companion"
    ]
};

export default createBespokeUtility(metadata);
