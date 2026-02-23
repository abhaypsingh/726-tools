import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "meditation-guide",
    "name": "Meditation Guide",
    "category": "emotions & wellness",
    "description": "A emotions & wellness utility",
    "complexity": "advanced",
    "action": "guide",
    "archetype": "coach",
    "domain": "Meditation",
    "intent": "Guide gives targeted Meditation guidance with next actions.",
    "workflow": [
        "Assess meditation baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "meditation",
        "guide"
    ]
};

export default createBespokeUtility(metadata);
