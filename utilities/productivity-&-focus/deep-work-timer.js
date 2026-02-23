import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "deep-work-timer",
    "name": "Deep Work Timer",
    "category": "productivity & focus",
    "description": "A productivity & focus utility",
    "complexity": "advanced",
    "action": "timer",
    "archetype": "coach",
    "domain": "Deep Work",
    "intent": "Timer gives targeted Deep Work guidance with next actions.",
    "workflow": [
        "Assess deep work baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "deep",
        "work",
        "timer"
    ]
};

export default createBespokeUtility(metadata);
