import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "momentum-meter",
    "name": "Momentum Meter",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "meter",
    "archetype": "coach",
    "domain": "Momentum",
    "intent": "Meter gives targeted Momentum guidance with next actions.",
    "workflow": [
        "Assess momentum baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "momentum",
        "meter"
    ]
};

export default createBespokeUtility(metadata);
