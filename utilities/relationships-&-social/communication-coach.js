import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "communication-coach",
    "name": "Communication Coach",
    "category": "relationships & social",
    "description": "A relationships & social utility",
    "complexity": "advanced",
    "action": "coach",
    "archetype": "coach",
    "domain": "Communication",
    "intent": "Coach gives targeted Communication guidance with next actions.",
    "workflow": [
        "Assess communication baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "communication",
        "coach"
    ]
};

export default createBespokeUtility(metadata);
