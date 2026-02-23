import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "comma-composer",
    "name": "Comma Composer",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "composer",
    "archetype": "coach",
    "domain": "Comma",
    "intent": "Composer gives targeted Comma guidance with next actions.",
    "workflow": [
        "Assess comma baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "comma",
        "composer"
    ]
};

export default createBespokeUtility(metadata);
