import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "vocabulary-vault",
    "name": "Vocabulary Vault",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "vault",
    "archetype": "coach",
    "domain": "Vocabulary",
    "intent": "Vault gives targeted Vocabulary guidance with next actions.",
    "workflow": [
        "Assess vocabulary baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "vocabulary",
        "vault"
    ]
};

export default createBespokeUtility(metadata);
