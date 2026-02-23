import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "shortcut-scout",
    "name": "Shortcut Scout",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "scout",
    "archetype": "coach",
    "domain": "Shortcut",
    "intent": "Scout gives targeted Shortcut guidance with next actions.",
    "workflow": [
        "Assess shortcut baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "shortcut",
        "scout"
    ]
};

export default createBespokeUtility(metadata);
