import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "identity-iterator",
    "name": "Identity Iterator",
    "category": "thinking & planning",
    "description": "Explore identity variations",
    "complexity": "intermediate",
    "action": "iterator",
    "archetype": "coach",
    "domain": "Identity",
    "intent": "Iterator gives targeted Identity guidance with next actions.",
    "workflow": [
        "Assess identity baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "identity",
        "iterator"
    ]
};

export default createBespokeUtility(metadata);
