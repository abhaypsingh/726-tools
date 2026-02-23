import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "worry-window",
    "name": "Worry Window",
    "category": "thinking & planning",
    "description": "Schedule specific times to process worries",
    "complexity": "intermediate",
    "action": "window",
    "archetype": "coach",
    "domain": "Worry",
    "intent": "Window gives targeted Worry guidance with next actions.",
    "workflow": [
        "Assess worry baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "worry",
        "window"
    ]
};

export default createBespokeUtility(metadata);
