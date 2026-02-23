import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "substitute-suggester",
    "name": "Substitute Suggester",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "suggester",
    "archetype": "coach",
    "domain": "Substitute",
    "intent": "Suggester gives targeted Substitute guidance with next actions.",
    "workflow": [
        "Assess substitute baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "substitute",
        "suggester"
    ]
};

export default createBespokeUtility(metadata);
