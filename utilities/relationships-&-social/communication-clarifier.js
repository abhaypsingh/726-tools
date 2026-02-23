import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "communication-clarifier",
    "name": "Communication Clarifier",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "clarifier",
    "archetype": "coach",
    "domain": "Communication",
    "intent": "Clarifier gives targeted Communication guidance with next actions.",
    "workflow": [
        "Assess communication baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "communication",
        "clarifier"
    ]
};

export default createBespokeUtility(metadata);
