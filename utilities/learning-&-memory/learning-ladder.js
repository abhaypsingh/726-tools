import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "learning-ladder",
    "name": "Learning Ladder",
    "category": "learning & memory",
    "description": "Build learning progressions",
    "complexity": "intermediate",
    "action": "ladder",
    "archetype": "coach",
    "domain": "Learning",
    "intent": "Ladder gives targeted Learning guidance with next actions.",
    "workflow": [
        "Assess learning baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "learning",
        "ladder"
    ]
};

export default createBespokeUtility(metadata);
