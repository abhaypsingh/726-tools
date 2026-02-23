import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "content-curator",
    "name": "Content Curator",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "curator",
    "archetype": "coach",
    "domain": "Content",
    "intent": "Curator gives targeted Content guidance with next actions.",
    "workflow": [
        "Assess content baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "content",
        "curator"
    ]
};

export default createBespokeUtility(metadata);
