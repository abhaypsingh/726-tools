import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "neighbor-network",
    "name": "Neighbor Network",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "network",
    "archetype": "coach",
    "domain": "Neighbor",
    "intent": "Network gives targeted Neighbor guidance with next actions.",
    "workflow": [
        "Assess neighbor baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "neighbor",
        "network"
    ]
};

export default createBespokeUtility(metadata);
