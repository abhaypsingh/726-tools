import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "vision-vortex",
    "name": "Vision Vortex",
    "category": "thinking & planning",
    "description": "Spiral into future possibilities",
    "complexity": "intermediate",
    "action": "vortex",
    "archetype": "coach",
    "domain": "Vision",
    "intent": "Vortex gives targeted Vision guidance with next actions.",
    "workflow": [
        "Assess vision baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "vision",
        "vortex"
    ]
};

export default createBespokeUtility(metadata);
