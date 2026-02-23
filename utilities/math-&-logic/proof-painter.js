import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "proof-painter",
    "name": "Proof Painter",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "painter",
    "archetype": "coach",
    "domain": "Proof",
    "intent": "Painter gives targeted Proof guidance with next actions.",
    "workflow": [
        "Assess proof baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "proof",
        "painter"
    ]
};

export default createBespokeUtility(metadata);
