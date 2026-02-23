import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mixing-assistant",
    "name": "Mixing Assistant",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "assistant",
    "archetype": "coach",
    "domain": "Mixing",
    "intent": "Assistant gives targeted Mixing guidance with next actions.",
    "workflow": [
        "Assess mixing baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "mixing",
        "assistant"
    ]
};

export default createBespokeUtility(metadata);
