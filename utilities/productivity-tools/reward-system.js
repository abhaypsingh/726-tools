import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "reward-system",
    "name": "Reward System",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "system",
    "archetype": "coach",
    "domain": "Reward",
    "intent": "System gives targeted Reward guidance with next actions.",
    "workflow": [
        "Assess reward baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "reward",
        "system"
    ]
};

export default createBespokeUtility(metadata);
