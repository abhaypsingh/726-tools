import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "astronomy-guide",
    "name": "Astronomy Guide",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "guide",
    "archetype": "coach",
    "domain": "Astronomy",
    "intent": "Guide gives targeted Astronomy guidance with next actions.",
    "workflow": [
        "Assess astronomy baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "astronomy",
        "guide"
    ]
};

export default createBespokeUtility(metadata);
