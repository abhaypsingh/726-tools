import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "probability-prophet",
    "name": "Probability Prophet",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "prophet",
    "archetype": "coach",
    "domain": "Probability",
    "intent": "Prophet gives targeted Probability guidance with next actions.",
    "workflow": [
        "Assess probability baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "probability",
        "prophet"
    ]
};

export default createBespokeUtility(metadata);
