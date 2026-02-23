import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "punctuation-pilot",
    "name": "Punctuation Pilot",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "pilot",
    "archetype": "coach",
    "domain": "Punctuation",
    "intent": "Pilot gives targeted Punctuation guidance with next actions.",
    "workflow": [
        "Assess punctuation baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "punctuation",
        "pilot"
    ]
};

export default createBespokeUtility(metadata);
