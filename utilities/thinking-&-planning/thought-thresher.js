import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "thought-thresher",
    "name": "Thought Thresher",
    "category": "thinking & planning",
    "description": "Separate wheat from chaff in thoughts",
    "complexity": "intermediate",
    "action": "thresher",
    "archetype": "coach",
    "domain": "Thought",
    "intent": "Thresher gives targeted Thought guidance with next actions.",
    "workflow": [
        "Assess thought baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "thought",
        "thresher"
    ]
};

export default createBespokeUtility(metadata);
