import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "skill-tree",
    "name": "Skill Tree",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "tree",
    "archetype": "coach",
    "domain": "Skill",
    "intent": "Tree gives targeted Skill guidance with next actions.",
    "workflow": [
        "Assess skill baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "skill",
        "tree"
    ]
};

export default createBespokeUtility(metadata);
