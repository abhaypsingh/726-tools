import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "time-telescope",
    "name": "Time Telescope",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "telescope",
    "archetype": "coach",
    "domain": "Time",
    "intent": "Telescope gives targeted Time guidance with next actions.",
    "workflow": [
        "Assess time baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "time",
        "telescope"
    ]
};

export default createBespokeUtility(metadata);
