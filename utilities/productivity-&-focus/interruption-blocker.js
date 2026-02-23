import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "interruption-blocker",
    "name": "Interruption Blocker",
    "category": "productivity & focus",
    "description": "A productivity & focus utility",
    "complexity": "advanced",
    "action": "blocker",
    "archetype": "coach",
    "domain": "Interruption",
    "intent": "Blocker gives targeted Interruption guidance with next actions.",
    "workflow": [
        "Assess interruption baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "interruption",
        "blocker"
    ]
};

export default createBespokeUtility(metadata);
