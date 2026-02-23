import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "conversation-catalyst",
    "name": "Conversation Catalyst",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "catalyst",
    "archetype": "coach",
    "domain": "Conversation",
    "intent": "Catalyst gives targeted Conversation guidance with next actions.",
    "workflow": [
        "Assess conversation baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "conversation",
        "catalyst"
    ]
};

export default createBespokeUtility(metadata);
