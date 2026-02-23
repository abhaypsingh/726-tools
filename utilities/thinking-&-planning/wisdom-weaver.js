import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "wisdom-weaver",
    "name": "Wisdom Weaver",
    "category": "thinking & planning",
    "description": "A powerful tool for thinking & planning tasks",
    "complexity": "advanced",
    "action": "weaver",
    "archetype": "coach",
    "domain": "Wisdom",
    "intent": "Weaver gives targeted Wisdom guidance with next actions.",
    "workflow": [
        "Assess wisdom baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "wisdom",
        "weaver"
    ]
};

export default createBespokeUtility(metadata);
