import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "summary-synthesizer",
    "name": "Summary Synthesizer",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "synthesizer",
    "archetype": "coach",
    "domain": "Summary",
    "intent": "Synthesizer gives targeted Summary guidance with next actions.",
    "workflow": [
        "Assess summary baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "summary",
        "synthesizer"
    ]
};

export default createBespokeUtility(metadata);
