import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "productivity-coach",
    "name": "Productivity Coach",
    "category": "productivity tools",
    "description": "A productivity tools utility",
    "complexity": "advanced",
    "action": "coach",
    "archetype": "coach",
    "domain": "Productivity",
    "intent": "Coach gives targeted Productivity guidance with next actions.",
    "workflow": [
        "Assess productivity baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "productivity",
        "coach"
    ]
};

export default createBespokeUtility(metadata);
