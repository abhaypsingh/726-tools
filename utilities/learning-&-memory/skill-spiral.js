import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "skill-spiral",
    "name": "Skill Spiral",
    "category": "learning & memory",
    "description": "Track skill progression in ascending spirals",
    "complexity": "intermediate",
    "action": "spiral",
    "archetype": "coach",
    "domain": "Skill",
    "intent": "Spiral gives targeted Skill guidance with next actions.",
    "workflow": [
        "Assess skill baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "skill",
        "spiral"
    ]
};

export default createBespokeUtility(metadata);
