import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "memory-mesh",
    "name": "Memory Mesh",
    "category": "learning & memory",
    "description": "Create memory networks",
    "complexity": "intermediate",
    "action": "mesh",
    "archetype": "coach",
    "domain": "Memory",
    "intent": "Mesh gives targeted Memory guidance with next actions.",
    "workflow": [
        "Assess memory baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "memory",
        "mesh"
    ]
};

export default createBespokeUtility(metadata);
