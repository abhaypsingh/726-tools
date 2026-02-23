import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "focus-frequency",
    "name": "Focus Frequency",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "frequency",
    "archetype": "coach",
    "domain": "Focus",
    "intent": "Frequency gives targeted Focus guidance with next actions.",
    "workflow": [
        "Assess focus baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "focus",
        "frequency"
    ]
};

export default createBespokeUtility(metadata);
