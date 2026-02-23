import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "podcast-queue",
    "name": "Podcast Queue",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "queue",
    "archetype": "coach",
    "domain": "Podcast",
    "intent": "Queue gives targeted Podcast guidance with next actions.",
    "workflow": [
        "Assess podcast baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "podcast",
        "queue"
    ]
};

export default createBespokeUtility(metadata);
