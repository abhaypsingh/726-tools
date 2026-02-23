import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "storytelling-helper",
    "name": "Storytelling Helper",
    "category": "writing & language",
    "description": "A writing & language utility",
    "complexity": "advanced",
    "action": "assistant",
    "archetype": "coach",
    "domain": "Storytelling",
    "intent": "Assistant gives targeted Storytelling guidance with next actions.",
    "workflow": [
        "Assess storytelling baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "storytelling",
        "helper"
    ]
};

export default createBespokeUtility(metadata);
