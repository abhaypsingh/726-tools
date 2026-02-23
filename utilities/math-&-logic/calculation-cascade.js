import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "calculation-cascade",
    "name": "Calculation Cascade",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "cascade",
    "archetype": "coach",
    "domain": "Calculation",
    "intent": "Cascade gives targeted Calculation guidance with next actions.",
    "workflow": [
        "Assess calculation baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "calculation",
        "cascade"
    ]
};

export default createBespokeUtility(metadata);
