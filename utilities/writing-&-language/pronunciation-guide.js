import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "pronunciation-guide",
    "name": "Pronunciation Guide",
    "category": "writing & language",
    "description": "A writing & language utility",
    "complexity": "advanced",
    "action": "guide",
    "archetype": "coach",
    "domain": "Pronunciation",
    "intent": "Guide gives targeted Pronunciation guidance with next actions.",
    "workflow": [
        "Assess pronunciation baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "pronunciation",
        "guide"
    ]
};

export default createBespokeUtility(metadata);
