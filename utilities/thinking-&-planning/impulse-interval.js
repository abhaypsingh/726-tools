import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "impulse-interval",
    "name": "⏸️ Impulse Interval",
    "category": "thinking & planning",
    "description": "Create healthy space between urges and actions through mindful pausing",
    "complexity": "advanced",
    "action": "interval",
    "archetype": "coach",
    "domain": "Impulse",
    "intent": "Interval gives targeted Impulse guidance with next actions.",
    "workflow": [
        "Assess impulse baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "impulse",
        "interval"
    ]
};

export default createBespokeUtility(metadata);
