import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "conclusion-crafter",
    "name": "Conclusion Crafter",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "crafter",
    "archetype": "coach",
    "domain": "Conclusion",
    "intent": "Crafter gives targeted Conclusion guidance with next actions.",
    "workflow": [
        "Assess conclusion baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "conclusion",
        "crafter"
    ]
};

export default createBespokeUtility(metadata);
