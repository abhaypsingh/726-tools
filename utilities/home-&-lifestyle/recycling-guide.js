import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "recycling-guide",
    "name": "Recycling Guide",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "guide",
    "archetype": "coach",
    "domain": "Recycling",
    "intent": "Guide gives targeted Recycling guidance with next actions.",
    "workflow": [
        "Assess recycling baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "recycling",
        "guide"
    ]
};

export default createBespokeUtility(metadata);
