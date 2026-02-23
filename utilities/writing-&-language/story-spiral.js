import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "story-spiral",
    "name": "Story Spiral",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "spiral",
    "archetype": "coach",
    "domain": "Story",
    "intent": "Spiral gives targeted Story guidance with next actions.",
    "workflow": [
        "Assess story baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "story",
        "spiral"
    ]
};

export default createBespokeUtility(metadata);
