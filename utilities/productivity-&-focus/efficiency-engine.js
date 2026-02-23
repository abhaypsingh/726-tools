import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "efficiency-engine",
    "name": "Efficiency Engine",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "engine",
    "archetype": "coach",
    "domain": "Efficiency",
    "intent": "Engine gives targeted Efficiency guidance with next actions.",
    "workflow": [
        "Assess efficiency baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "efficiency",
        "engine"
    ]
};

export default createBespokeUtility(metadata);
