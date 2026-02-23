import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "biology-classifier",
    "name": "Biology Classifier",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "classifier",
    "archetype": "coach",
    "domain": "Biology",
    "intent": "Classifier gives targeted Biology guidance with next actions.",
    "workflow": [
        "Assess biology baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "biology",
        "classifier"
    ]
};

export default createBespokeUtility(metadata);
