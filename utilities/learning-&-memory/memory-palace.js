import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "memory-palace",
    "name": "Memory Palace",
    "category": "learning & memory",
    "description": "Build spatial memory systems for better recall",
    "complexity": "intermediate",
    "action": "palace",
    "archetype": "coach",
    "domain": "Memory",
    "intent": "Palace gives targeted Memory guidance with next actions.",
    "workflow": [
        "Assess memory baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "memory",
        "palace"
    ]
};

export default createBespokeUtility(metadata);
