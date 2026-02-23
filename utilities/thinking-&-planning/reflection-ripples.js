import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "reflection-ripples",
    "name": "Reflection Ripples",
    "category": "thinking & planning",
    "description": "A powerful tool for thinking & planning tasks",
    "complexity": "advanced",
    "action": "ripples",
    "archetype": "coach",
    "domain": "Reflection",
    "intent": "Ripples gives targeted Reflection guidance with next actions.",
    "workflow": [
        "Assess reflection baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "reflection",
        "ripples"
    ]
};

export default createBespokeUtility(metadata);
