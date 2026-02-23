import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "story-starter",
    "name": "Story Starter",
    "category": "fun & games",
    "description": "A powerful tool for fun & games tasks",
    "complexity": "intermediate",
    "action": "starter",
    "archetype": "coach",
    "domain": "Story",
    "intent": "Starter gives targeted Story guidance with next actions.",
    "workflow": [
        "Assess story baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "story",
        "starter"
    ]
};

export default createBespokeUtility(metadata);
