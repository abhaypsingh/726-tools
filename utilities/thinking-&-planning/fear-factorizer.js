import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "fear-factorizer",
    "name": "Fear Factorizer",
    "category": "thinking & planning",
    "description": "Break fears into components",
    "complexity": "advanced",
    "action": "factorizer",
    "archetype": "coach",
    "domain": "Fear",
    "intent": "Factorizer gives targeted Fear guidance with next actions.",
    "workflow": [
        "Assess fear baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "fear",
        "factorizer"
    ]
};

export default createBespokeUtility(metadata);
