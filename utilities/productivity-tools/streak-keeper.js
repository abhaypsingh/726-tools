import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "streak-keeper",
    "name": "Streak Keeper",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "keeper",
    "archetype": "coach",
    "domain": "Streak",
    "intent": "Keeper gives targeted Streak guidance with next actions.",
    "workflow": [
        "Assess streak baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "streak",
        "keeper"
    ]
};

export default createBespokeUtility(metadata);
