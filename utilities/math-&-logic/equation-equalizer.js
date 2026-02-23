import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "equation-equalizer",
    "name": "Equation Equalizer",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "equalizer",
    "archetype": "coach",
    "domain": "Equation",
    "intent": "Equalizer gives targeted Equation guidance with next actions.",
    "workflow": [
        "Assess equation baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "equation",
        "equalizer"
    ]
};

export default createBespokeUtility(metadata);
