import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "technique-teacher",
    "name": "Technique Teacher",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "teacher",
    "archetype": "coach",
    "domain": "Technique",
    "intent": "Teacher gives targeted Technique guidance with next actions.",
    "workflow": [
        "Assess technique baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "technique",
        "teacher"
    ]
};

export default createBespokeUtility(metadata);
