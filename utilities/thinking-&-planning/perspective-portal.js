import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "perspective-portal",
    "name": "Perspective Portal",
    "category": "thinking & planning",
    "description": "A powerful tool for thinking & planning tasks",
    "complexity": "advanced",
    "action": "portal",
    "archetype": "coach",
    "domain": "Perspective",
    "intent": "Portal gives targeted Perspective guidance with next actions.",
    "workflow": [
        "Assess perspective baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "perspective",
        "portal"
    ]
};

export default createBespokeUtility(metadata);
