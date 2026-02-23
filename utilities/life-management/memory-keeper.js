import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "memory-keeper",
    "name": "Memory Keeper",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "keeper",
    "archetype": "coach",
    "domain": "Memory",
    "intent": "Keeper gives targeted Memory guidance with next actions.",
    "workflow": [
        "Assess memory baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "memory",
        "keeper"
    ]
};

export default createBespokeUtility(metadata);
