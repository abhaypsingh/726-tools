import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "language-helper",
    "name": "Language Helper",
    "category": "travel & adventure",
    "description": "A travel & adventure utility",
    "complexity": "advanced",
    "action": "assistant",
    "archetype": "coach",
    "domain": "Language",
    "intent": "Assistant gives targeted Language guidance with next actions.",
    "workflow": [
        "Assess language baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "language",
        "helper"
    ]
};

export default createBespokeUtility(metadata);
