import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "story-sharer",
    "name": "Story Sharer",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "sharer",
    "archetype": "coach",
    "domain": "Story",
    "intent": "Sharer gives targeted Story guidance with next actions.",
    "workflow": [
        "Assess story baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "story",
        "sharer"
    ]
};

export default createBespokeUtility(metadata);
