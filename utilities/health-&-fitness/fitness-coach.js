import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "fitness-coach",
    "name": "Fitness Coach",
    "category": "health & fitness",
    "description": "A health & fitness utility",
    "complexity": "advanced",
    "action": "coach",
    "archetype": "coach",
    "domain": "Fitness",
    "intent": "Coach gives targeted Fitness guidance with next actions.",
    "workflow": [
        "Assess fitness baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "fitness",
        "coach"
    ]
};

export default createBespokeUtility(metadata);
