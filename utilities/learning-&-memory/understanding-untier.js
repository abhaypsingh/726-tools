import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "understanding-untier",
    "name": "Understanding Untier",
    "category": "learning & memory",
    "description": "Untangle complex concepts",
    "complexity": "advanced",
    "action": "untier",
    "archetype": "coach",
    "domain": "Understanding",
    "intent": "Untier gives targeted Understanding guidance with next actions.",
    "workflow": [
        "Assess understanding baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "understanding",
        "untier"
    ]
};

export default createBespokeUtility(metadata);
