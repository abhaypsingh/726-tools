import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "pattern-prophet-math",
    "name": "Pattern Prophet Math",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "math",
    "archetype": "coach",
    "domain": "Pattern Prophet",
    "intent": "Math gives targeted Pattern Prophet guidance with next actions.",
    "workflow": [
        "Assess pattern prophet baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "pattern",
        "prophet",
        "math"
    ]
};

export default createBespokeUtility(metadata);
