import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "headline-herald",
    "name": "Headline Herald",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "herald",
    "archetype": "coach",
    "domain": "Headline",
    "intent": "Herald gives targeted Headline guidance with next actions.",
    "workflow": [
        "Assess headline baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "headline",
        "herald"
    ]
};

export default createBespokeUtility(metadata);
