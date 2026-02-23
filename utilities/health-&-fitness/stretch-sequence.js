import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "stretch-sequence",
    "name": "Stretch Sequence",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "sequence",
    "archetype": "coach",
    "domain": "Stretch",
    "intent": "Sequence gives targeted Stretch guidance with next actions.",
    "workflow": [
        "Assess stretch baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "stretch",
        "sequence"
    ]
};

export default createBespokeUtility(metadata);
