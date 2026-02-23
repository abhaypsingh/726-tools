import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "reflection-refractor",
    "name": "Reflection Refractor",
    "category": "thinking & planning",
    "description": "Split reflections into insights",
    "complexity": "advanced",
    "action": "refractor",
    "archetype": "coach",
    "domain": "Reflection",
    "intent": "Refractor gives targeted Reflection guidance with next actions.",
    "workflow": [
        "Assess reflection baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "reflection",
        "refractor"
    ]
};

export default createBespokeUtility(metadata);
