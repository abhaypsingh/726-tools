import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mindfulness-bell",
    "name": "Mindfulness Bell",
    "category": "emotions & wellness",
    "description": "A emotions & wellness utility",
    "complexity": "advanced",
    "action": "bell",
    "archetype": "coach",
    "domain": "Mindfulness",
    "intent": "Bell gives targeted Mindfulness guidance with next actions.",
    "workflow": [
        "Assess mindfulness baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "mindfulness",
        "bell"
    ]
};

export default createBespokeUtility(metadata);
