import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "journal-journey",
    "name": "Journal Journey",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "journey",
    "archetype": "coach",
    "domain": "Journal",
    "intent": "Journey gives targeted Journal guidance with next actions.",
    "workflow": [
        "Assess journal baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "journal",
        "journey"
    ]
};

export default createBespokeUtility(metadata);
