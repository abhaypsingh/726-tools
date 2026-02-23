import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "poem-processor",
    "name": "Poem Processor",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "processor",
    "archetype": "coach",
    "domain": "Poem",
    "intent": "Processor gives targeted Poem guidance with next actions.",
    "workflow": [
        "Assess poem baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "poem",
        "processor"
    ]
};

export default createBespokeUtility(metadata);
