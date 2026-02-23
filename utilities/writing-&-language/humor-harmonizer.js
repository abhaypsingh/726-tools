import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "humor-harmonizer",
    "name": "Humor Harmonizer",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "harmonizer",
    "archetype": "coach",
    "domain": "Humor",
    "intent": "Harmonizer gives targeted Humor guidance with next actions.",
    "workflow": [
        "Assess humor baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "humor",
        "harmonizer"
    ]
};

export default createBespokeUtility(metadata);
