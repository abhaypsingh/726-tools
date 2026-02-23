import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "budget-backpacker",
    "name": "Budget Backpacker",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "backpacker",
    "archetype": "coach",
    "domain": "Budget",
    "intent": "Backpacker gives targeted Budget guidance with next actions.",
    "workflow": [
        "Assess budget baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "budget",
        "backpacker"
    ]
};

export default createBespokeUtility(metadata);
