import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "summary-surgeon",
    "name": "Summary Surgeon",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "surgeon",
    "archetype": "coach",
    "domain": "Summary",
    "intent": "Surgeon gives targeted Summary guidance with next actions.",
    "workflow": [
        "Assess summary baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "summary",
        "surgeon"
    ]
};

export default createBespokeUtility(metadata);
