import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "validation-vault",
    "name": "Validation Vault",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "vault",
    "archetype": "coach",
    "domain": "Validation",
    "intent": "Vault gives targeted Validation guidance with next actions.",
    "workflow": [
        "Assess validation baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "validation",
        "vault"
    ]
};

export default createBespokeUtility(metadata);
