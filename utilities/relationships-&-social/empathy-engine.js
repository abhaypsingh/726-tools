import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "empathy-engine",
    "name": "Empathy Engine",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "engine",
    "archetype": "coach",
    "domain": "Empathy",
    "intent": "Engine gives targeted Empathy guidance with next actions.",
    "workflow": [
        "Assess empathy baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "empathy",
        "engine"
    ]
};

export default createBespokeUtility(metadata);
