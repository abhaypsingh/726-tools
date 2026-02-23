import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "shape-shifter",
    "name": "Shape Shifter",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "shifter",
    "archetype": "coach",
    "domain": "Shape",
    "intent": "Shifter gives targeted Shape guidance with next actions.",
    "workflow": [
        "Assess shape baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "shape",
        "shifter"
    ]
};

export default createBespokeUtility(metadata);
