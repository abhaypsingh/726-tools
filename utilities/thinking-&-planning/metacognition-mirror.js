import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "metacognition-mirror",
    "name": "Metacognition Mirror",
    "category": "thinking & planning",
    "description": "A powerful tool for thinking & planning tasks",
    "complexity": "advanced",
    "action": "mirror",
    "archetype": "coach",
    "domain": "Metacognition",
    "intent": "Mirror gives targeted Metacognition guidance with next actions.",
    "workflow": [
        "Assess metacognition baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "metacognition",
        "mirror"
    ]
};

export default createBespokeUtility(metadata);
