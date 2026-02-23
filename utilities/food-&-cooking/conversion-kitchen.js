import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "conversion-kitchen",
    "name": "Conversion Kitchen",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "kitchen",
    "archetype": "coach",
    "domain": "Conversion",
    "intent": "Kitchen gives targeted Conversion guidance with next actions.",
    "workflow": [
        "Assess conversion baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "conversion",
        "kitchen"
    ]
};

export default createBespokeUtility(metadata);
