import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "flavor-fusion",
    "name": "Flavor Fusion",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "fusion",
    "archetype": "coach",
    "domain": "Flavor",
    "intent": "Fusion gives targeted Flavor guidance with next actions.",
    "workflow": [
        "Assess flavor baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "flavor",
        "fusion"
    ]
};

export default createBespokeUtility(metadata);
