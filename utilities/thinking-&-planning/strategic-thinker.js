import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "strategic-thinker",
    "name": "Strategic Thinker",
    "category": "thinking & planning",
    "description": "A thinking & planning utility",
    "complexity": "advanced",
    "action": "thinker",
    "archetype": "coach",
    "domain": "Strategic",
    "intent": "Thinker gives targeted Strategic guidance with next actions.",
    "workflow": [
        "Assess strategic baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "strategic",
        "thinker"
    ]
};

export default createBespokeUtility(metadata);
