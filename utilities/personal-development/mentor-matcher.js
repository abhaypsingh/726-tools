import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mentor-matcher",
    "name": "Mentor Matcher",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "coach",
    "archetype": "coach",
    "domain": "Matcher",
    "intent": "Coach gives targeted Matcher guidance with next actions.",
    "workflow": [
        "Assess matcher baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "mentor",
        "matcher"
    ]
};

export default createBespokeUtility(metadata);
