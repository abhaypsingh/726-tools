import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "paradox-processor",
    "name": "Paradox Processor",
    "category": "thinking & planning",
    "description": "A powerful tool for thinking & planning tasks",
    "complexity": "advanced",
    "action": "processor",
    "archetype": "coach",
    "domain": "Paradox",
    "intent": "Processor gives targeted Paradox guidance with next actions.",
    "workflow": [
        "Assess paradox baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "paradox",
        "processor"
    ]
};

export default createBespokeUtility(metadata);
