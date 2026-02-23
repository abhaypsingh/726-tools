import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "listening-lens",
    "name": "Listening Lens",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "lens",
    "archetype": "coach",
    "domain": "Listening",
    "intent": "Lens gives targeted Listening guidance with next actions.",
    "workflow": [
        "Assess listening baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "listening",
        "lens"
    ]
};

export default createBespokeUtility(metadata);
