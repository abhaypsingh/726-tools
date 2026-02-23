import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "energy-ebbs",
    "name": "Energy Ebbs",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "ebbs",
    "archetype": "coach",
    "domain": "Energy",
    "intent": "Ebbs gives targeted Energy guidance with next actions.",
    "workflow": [
        "Assess energy baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "energy",
        "ebbs"
    ]
};

export default createBespokeUtility(metadata);
