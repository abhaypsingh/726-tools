import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "skill-scaffolder",
    "name": "Skill Scaffolder",
    "category": "learning & memory",
    "description": "Build skill scaffolding",
    "complexity": "intermediate",
    "action": "scaffolder",
    "archetype": "coach",
    "domain": "Skill",
    "intent": "Scaffolder gives targeted Skill guidance with next actions.",
    "workflow": [
        "Assess skill baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "skill",
        "scaffolder"
    ]
};

export default createBespokeUtility(metadata);
