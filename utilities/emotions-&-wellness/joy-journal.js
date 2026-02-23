import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "joy-journal",
    "name": "Joy Journal",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "journal",
    "archetype": "coach",
    "domain": "Joy",
    "intent": "Journal gives targeted Joy guidance with next actions.",
    "workflow": [
        "Assess joy baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "joy",
        "journal"
    ]
};

export default createBespokeUtility(metadata);
