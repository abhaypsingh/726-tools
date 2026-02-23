import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "word-of-the-day",
    "name": "Word Of The Day",
    "category": "fun & games",
    "description": "A powerful tool for fun & games tasks",
    "complexity": "intermediate",
    "action": "day",
    "archetype": "coach",
    "domain": "Word Of The",
    "intent": "Day gives targeted Word Of The guidance with next actions.",
    "workflow": [
        "Assess word of the baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "word",
        "day"
    ]
};

export default createBespokeUtility(metadata);
