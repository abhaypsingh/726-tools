import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "number-narrator",
    "name": "Number Narrator",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "narrator",
    "archetype": "coach",
    "domain": "Number",
    "intent": "Narrator gives targeted Number guidance with next actions.",
    "workflow": [
        "Assess number baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "number",
        "narrator"
    ]
};

export default createBespokeUtility(metadata);
