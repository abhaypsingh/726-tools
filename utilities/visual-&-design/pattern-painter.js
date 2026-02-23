import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "pattern-painter",
    "name": "Pattern Painter",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "painter",
    "archetype": "coach",
    "domain": "Pattern",
    "intent": "Painter gives targeted Pattern guidance with next actions.",
    "workflow": [
        "Assess pattern baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "pattern",
        "painter"
    ]
};

export default createBespokeUtility(metadata);
