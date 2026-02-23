import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "thought-untangler",
    "name": "Thought Untangler",
    "category": "thinking & planning",
    "description": "Organize complex thoughts into clear themes and connections",
    "complexity": "advanced",
    "action": "untangler",
    "archetype": "coach",
    "domain": "Thought",
    "intent": "Untangler gives targeted Thought guidance with next actions.",
    "workflow": [
        "Assess thought baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "thought",
        "untangler"
    ]
};

export default createBespokeUtility(metadata);
