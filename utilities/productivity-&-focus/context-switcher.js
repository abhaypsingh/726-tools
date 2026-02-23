import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "context-switcher",
    "name": "Context Switcher",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "switcher",
    "archetype": "coach",
    "domain": "Context",
    "intent": "Switcher gives targeted Context guidance with next actions.",
    "workflow": [
        "Assess context baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "context",
        "switcher"
    ]
};

export default createBespokeUtility(metadata);
