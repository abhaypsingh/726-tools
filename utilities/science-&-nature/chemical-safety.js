import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "chemical-safety",
    "name": "Chemical Safety",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "safety",
    "archetype": "coach",
    "domain": "Chemical",
    "intent": "Safety gives targeted Chemical guidance with next actions.",
    "workflow": [
        "Assess chemical baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "chemical",
        "safety"
    ]
};

export default createBespokeUtility(metadata);
