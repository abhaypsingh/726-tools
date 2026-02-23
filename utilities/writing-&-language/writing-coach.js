import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "writing-coach",
    "name": "Writing Coach",
    "category": "writing & language",
    "description": "A writing & language utility",
    "complexity": "advanced",
    "action": "coach",
    "archetype": "coach",
    "domain": "Writing",
    "intent": "Coach gives targeted Writing guidance with next actions.",
    "workflow": [
        "Assess writing baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "writing",
        "coach"
    ]
};

export default createBespokeUtility(metadata);
