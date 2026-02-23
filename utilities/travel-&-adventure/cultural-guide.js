import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "cultural-guide",
    "name": "Cultural Guide",
    "category": "travel & adventure",
    "description": "A travel & adventure utility",
    "complexity": "advanced",
    "action": "guide",
    "archetype": "coach",
    "domain": "Cultural",
    "intent": "Guide gives targeted Cultural guidance with next actions.",
    "workflow": [
        "Assess cultural baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "cultural",
        "guide"
    ]
};

export default createBespokeUtility(metadata);
