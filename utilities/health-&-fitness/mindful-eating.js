import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mindful-eating",
    "name": "Mindful Eating",
    "category": "health & fitness",
    "description": "A health & fitness utility",
    "complexity": "advanced",
    "action": "eating",
    "archetype": "coach",
    "domain": "Mindful",
    "intent": "Eating gives targeted Mindful guidance with next actions.",
    "workflow": [
        "Assess mindful baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "mindful",
        "eating"
    ]
};

export default createBespokeUtility(metadata);
