import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "pattern-prophet",
    "name": "Pattern Prophet",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "prophet",
    "archetype": "coach",
    "domain": "Pattern",
    "intent": "Prophet gives targeted Pattern guidance with next actions.",
    "workflow": [
        "Assess pattern baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "pattern",
        "prophet"
    ]
};

export default createBespokeUtility(metadata);
