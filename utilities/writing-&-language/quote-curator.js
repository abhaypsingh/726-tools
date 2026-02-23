import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "quote-curator",
    "name": "Quote Curator",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "curator",
    "archetype": "coach",
    "domain": "Quote",
    "intent": "Curator gives targeted Quote guidance with next actions.",
    "workflow": [
        "Assess quote baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "quote",
        "curator"
    ]
};

export default createBespokeUtility(metadata);
