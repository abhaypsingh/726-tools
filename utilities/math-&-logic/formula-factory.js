import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "formula-factory",
    "name": "Formula Factory",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "factory",
    "archetype": "coach",
    "domain": "Formula",
    "intent": "Factory gives targeted Formula guidance with next actions.",
    "workflow": [
        "Assess formula baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "formula",
        "factory"
    ]
};

export default createBespokeUtility(metadata);
