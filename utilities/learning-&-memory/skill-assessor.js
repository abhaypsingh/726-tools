import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "skill-assessor",
    "name": "Skill Assessor",
    "category": "learning & memory",
    "description": "A learning & memory utility",
    "complexity": "advanced",
    "action": "assessor",
    "archetype": "coach",
    "domain": "Skill",
    "intent": "Assessor gives targeted Skill guidance with next actions.",
    "workflow": [
        "Assess skill baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "skill",
        "assessor"
    ]
};

export default createBespokeUtility(metadata);
