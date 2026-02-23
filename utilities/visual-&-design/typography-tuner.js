import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "typography-tuner",
    "name": "Typography Tuner",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "tuner",
    "archetype": "coach",
    "domain": "Typography",
    "intent": "Tuner gives targeted Typography guidance with next actions.",
    "workflow": [
        "Assess typography baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "typography",
        "tuner"
    ]
};

export default createBespokeUtility(metadata);
