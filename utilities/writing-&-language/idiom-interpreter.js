import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "idiom-interpreter",
    "name": "Idiom Interpreter",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "interpreter",
    "archetype": "coach",
    "domain": "Idiom",
    "intent": "Interpreter gives targeted Idiom guidance with next actions.",
    "workflow": [
        "Assess idiom baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "idiom",
        "interpreter"
    ]
};

export default createBespokeUtility(metadata);
