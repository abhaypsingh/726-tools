import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "tagline-tailor",
    "name": "Tagline Tailor",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "tailor",
    "archetype": "coach",
    "domain": "Tagline",
    "intent": "Tailor gives targeted Tagline guidance with next actions.",
    "workflow": [
        "Assess tagline baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "tagline",
        "tailor"
    ]
};

export default createBespokeUtility(metadata);
