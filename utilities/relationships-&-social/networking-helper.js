import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "networking-helper",
    "name": "Networking Helper",
    "category": "relationships & social",
    "description": "A relationships & social utility",
    "complexity": "advanced",
    "action": "assistant",
    "archetype": "coach",
    "domain": "Networking",
    "intent": "Assistant gives targeted Networking guidance with next actions.",
    "workflow": [
        "Assess networking baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "networking",
        "helper"
    ]
};

export default createBespokeUtility(metadata);
