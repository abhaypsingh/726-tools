import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "posture-patrol",
    "name": "Posture Patrol",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "patrol",
    "archetype": "coach",
    "domain": "Posture",
    "intent": "Patrol gives targeted Posture guidance with next actions.",
    "workflow": [
        "Assess posture baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "posture",
        "patrol"
    ]
};

export default createBespokeUtility(metadata);
