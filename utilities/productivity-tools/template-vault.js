import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "template-vault",
    "name": "Template Vault",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "vault",
    "archetype": "coach",
    "domain": "Template",
    "intent": "Vault gives targeted Template guidance with next actions.",
    "workflow": [
        "Assess template baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "template",
        "vault"
    ]
};

export default createBespokeUtility(metadata);
