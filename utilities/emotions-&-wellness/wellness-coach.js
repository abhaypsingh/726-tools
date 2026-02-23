import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "wellness-coach",
    "name": "Wellness Coach",
    "category": "emotions & wellness",
    "description": "A emotions & wellness utility",
    "complexity": "advanced",
    "action": "coach",
    "archetype": "coach",
    "domain": "Wellness",
    "intent": "Coach gives targeted Wellness guidance with next actions.",
    "workflow": [
        "Assess wellness baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "wellness",
        "coach"
    ]
};

export default createBespokeUtility(metadata);
