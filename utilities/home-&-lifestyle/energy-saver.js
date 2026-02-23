import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "energy-saver",
    "name": "Energy Saver",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "saver",
    "archetype": "coach",
    "domain": "Energy",
    "intent": "Saver gives targeted Energy guidance with next actions.",
    "workflow": [
        "Assess energy baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "energy",
        "saver"
    ]
};

export default createBespokeUtility(metadata);
