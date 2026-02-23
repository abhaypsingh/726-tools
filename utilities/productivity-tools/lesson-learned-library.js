import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "lesson-learned-library",
    "name": "Lesson Learned Library",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "library",
    "archetype": "coach",
    "domain": "Lesson Learned",
    "intent": "Library gives targeted Lesson Learned guidance with next actions.",
    "workflow": [
        "Assess lesson learned baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "lesson",
        "learned",
        "library"
    ]
};

export default createBespokeUtility(metadata);
