import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "anxiety-alchemist",
    "name": "Anxiety Alchemist",
    "category": "thinking & planning",
    "description": "Transform anxiety into action",
    "complexity": "intermediate",
    "action": "alchemist",
    "archetype": "coach",
    "domain": "Anxiety",
    "intent": "Alchemist gives targeted Anxiety guidance with next actions.",
    "workflow": [
        "Assess anxiety baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "anxiety",
        "alchemist"
    ]
};

export default createBespokeUtility(metadata);
