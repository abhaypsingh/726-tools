import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "research-refiner",
    "name": "Research Refiner",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "refiner",
    "archetype": "coach",
    "domain": "Research",
    "intent": "Refiner gives targeted Research guidance with next actions.",
    "workflow": [
        "Assess research baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "research",
        "refiner"
    ]
};

export default createBespokeUtility(metadata);
