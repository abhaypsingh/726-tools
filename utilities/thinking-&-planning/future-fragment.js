import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "future-fragment",
    "name": "Future Fragment",
    "category": "thinking & planning",
    "description": "Send messages to your future self - wisdom, reminders, or encouragement when you need it most",
    "complexity": "advanced",
    "action": "fragment",
    "archetype": "coach",
    "domain": "Future",
    "intent": "Fragment gives targeted Future guidance with next actions.",
    "workflow": [
        "Assess future baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "future",
        "fragment"
    ]
};

export default createBespokeUtility(metadata);
