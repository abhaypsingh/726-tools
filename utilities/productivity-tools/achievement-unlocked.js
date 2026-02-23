import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "achievement-unlocked",
    "name": "Achievement Unlocked",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "unlocked",
    "archetype": "coach",
    "domain": "Achievement",
    "intent": "Unlocked gives targeted Achievement guidance with next actions.",
    "workflow": [
        "Assess achievement baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "achievement",
        "unlocked"
    ]
};

export default createBespokeUtility(metadata);
