import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "word-weaver",
    "name": "Word Weaver",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "weaver",
    "archetype": "coach",
    "domain": "Word",
    "intent": "Weaver gives targeted Word guidance with next actions.",
    "workflow": [
        "Assess word baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "word",
        "weaver"
    ]
};

export default createBespokeUtility(metadata);
