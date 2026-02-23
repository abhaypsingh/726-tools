import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "energy-accountant",
    "name": "Energy Accountant",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "accountant",
    "archetype": "coach",
    "domain": "Energy",
    "intent": "Accountant gives targeted Energy guidance with next actions.",
    "workflow": [
        "Assess energy baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "energy",
        "accountant"
    ]
};

export default createBespokeUtility(metadata);
