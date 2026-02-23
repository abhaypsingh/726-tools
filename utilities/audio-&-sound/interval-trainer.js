import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "interval-trainer",
    "name": "Interval Trainer",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "trainer",
    "archetype": "coach",
    "domain": "Interval",
    "intent": "Trainer gives targeted Interval guidance with next actions.",
    "workflow": [
        "Assess interval baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "interval",
        "trainer"
    ]
};

export default createBespokeUtility(metadata);
