import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "outline-oracle",
    "name": "Outline Oracle",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "advisor",
    "archetype": "coach",
    "domain": "Outline",
    "intent": "Advisor gives targeted Outline guidance with next actions.",
    "workflow": [
        "Assess outline baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "outline",
        "oracle"
    ]
};

export default createBespokeUtility(metadata);
