import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "goal-achiever",
    "name": "Goal Achiever",
    "category": "personal development",
    "description": "A personal development utility",
    "complexity": "advanced",
    "action": "achiever",
    "archetype": "coach",
    "domain": "Goal",
    "intent": "Achiever gives targeted Goal guidance with next actions.",
    "workflow": [
        "Assess goal baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "goal",
        "achiever"
    ]
};

export default createBespokeUtility(metadata);
