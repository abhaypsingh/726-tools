import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "appreciation-amplifier",
    "name": "Appreciation Amplifier",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "amplifier",
    "archetype": "coach",
    "domain": "Appreciation",
    "intent": "Amplifier gives targeted Appreciation guidance with next actions.",
    "workflow": [
        "Assess appreciation baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "appreciation",
        "amplifier"
    ]
};

export default createBespokeUtility(metadata);
