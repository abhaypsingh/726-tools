import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "percentage-painter",
    "name": "Percentage Painter",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "painter",
    "archetype": "coach",
    "domain": "Percentage",
    "intent": "Painter gives targeted Percentage guidance with next actions.",
    "workflow": [
        "Assess percentage baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "percentage",
        "painter"
    ]
};

export default createBespokeUtility(metadata);
