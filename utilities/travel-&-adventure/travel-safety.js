import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "travel-safety",
    "name": "Travel Safety",
    "category": "travel & adventure",
    "description": "A travel & adventure utility",
    "complexity": "advanced",
    "action": "safety",
    "archetype": "coach",
    "domain": "Travel",
    "intent": "Safety gives targeted Travel guidance with next actions.",
    "workflow": [
        "Assess travel baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "travel",
        "safety"
    ]
};

export default createBespokeUtility(metadata);
