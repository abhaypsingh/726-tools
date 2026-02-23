import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "step-counter-plus",
    "name": "Step Counter Plus",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "plus",
    "archetype": "coach",
    "domain": "Step Counter",
    "intent": "Plus gives targeted Step Counter guidance with next actions.",
    "workflow": [
        "Assess step counter baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "step",
        "counter"
    ]
};

export default createBespokeUtility(metadata);
