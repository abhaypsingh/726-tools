import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "blockchain-explorer",
    "name": "Blockchain Explorer",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "explorer",
    "archetype": "coach",
    "domain": "Blockchain",
    "intent": "Explorer gives targeted Blockchain guidance with next actions.",
    "workflow": [
        "Assess blockchain baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "blockchain",
        "explorer"
    ]
};

export default createBespokeUtility(metadata);
