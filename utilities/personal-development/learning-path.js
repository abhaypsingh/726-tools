import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "learning-path",
    "name": "Learning Path",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "path",
    "archetype": "coach",
    "domain": "Learning",
    "intent": "Path gives targeted Learning guidance with next actions.",
    "workflow": [
        "Assess learning baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "learning",
        "path"
    ]
};

export default createBespokeUtility(metadata);
