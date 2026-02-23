import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "savings-goal",
    "name": "Savings Goal",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "goal",
    "archetype": "coach",
    "domain": "Savings",
    "intent": "Goal gives targeted Savings guidance with next actions.",
    "workflow": [
        "Assess savings baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "savings",
        "goal"
    ]
};

export default createBespokeUtility(metadata);
