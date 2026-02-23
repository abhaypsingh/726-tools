import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "safety-scout",
    "name": "Safety Scout",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "scout",
    "archetype": "coach",
    "domain": "Safety",
    "intent": "Scout gives targeted Safety guidance with next actions.",
    "workflow": [
        "Assess safety baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "safety",
        "scout"
    ]
};

export default createBespokeUtility(metadata);
