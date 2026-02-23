import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "chef-assistant",
    "name": "Chef Assistant",
    "category": "food & cooking",
    "description": "A food & cooking utility",
    "complexity": "advanced",
    "action": "assistant",
    "archetype": "coach",
    "domain": "Chef",
    "intent": "Assistant gives targeted Chef guidance with next actions.",
    "workflow": [
        "Assess chef baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "chef",
        "assistant"
    ]
};

export default createBespokeUtility(metadata);
