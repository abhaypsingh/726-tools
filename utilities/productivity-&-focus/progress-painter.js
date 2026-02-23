import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "progress-painter",
    "name": "Progress Painter",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "painter",
    "archetype": "coach",
    "domain": "Progress",
    "intent": "Painter gives targeted Progress guidance with next actions.",
    "workflow": [
        "Assess progress baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "progress",
        "painter"
    ]
};

export default createBespokeUtility(metadata);
