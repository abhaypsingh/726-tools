import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "editing-engine",
    "name": "Editing Engine",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "engine",
    "archetype": "coach",
    "domain": "Editing",
    "intent": "Engine gives targeted Editing guidance with next actions.",
    "workflow": [
        "Assess editing baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "editing",
        "engine"
    ]
};

export default createBespokeUtility(metadata);
