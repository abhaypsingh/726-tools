import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "level-up-life",
    "name": "Level Up Life",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "life",
    "archetype": "coach",
    "domain": "Level Up",
    "intent": "Life gives targeted Level Up guidance with next actions.",
    "workflow": [
        "Assess level up baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "level",
        "life"
    ]
};

export default createBespokeUtility(metadata);
