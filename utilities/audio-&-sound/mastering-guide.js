import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mastering-guide",
    "name": "Mastering Guide",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "guide",
    "archetype": "coach",
    "domain": "Mastering",
    "intent": "Guide gives targeted Mastering guidance with next actions.",
    "workflow": [
        "Assess mastering baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "mastering",
        "guide"
    ]
};

export default createBespokeUtility(metadata);
