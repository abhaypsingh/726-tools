import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "ocean-explorer",
    "name": "Ocean Explorer",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "explorer",
    "archetype": "coach",
    "domain": "Ocean",
    "intent": "Explorer gives targeted Ocean guidance with next actions.",
    "workflow": [
        "Assess ocean baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "ocean",
        "explorer"
    ]
};

export default createBespokeUtility(metadata);
