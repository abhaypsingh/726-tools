import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "intimacy-index",
    "name": "Intimacy Index",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "index",
    "archetype": "coach",
    "domain": "Intimacy",
    "intent": "Index gives targeted Intimacy guidance with next actions.",
    "workflow": [
        "Assess intimacy baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "intimacy",
        "index"
    ]
};

export default createBespokeUtility(metadata);
