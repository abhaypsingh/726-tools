import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mind-map-maze",
    "name": "Mind Map Maze",
    "category": "learning & memory",
    "description": "Navigate thoughts spatially",
    "complexity": "intermediate",
    "action": "maze",
    "archetype": "coach",
    "domain": "Mind Map",
    "intent": "Maze gives targeted Mind Map guidance with next actions.",
    "workflow": [
        "Assess mind map baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "mind",
        "map",
        "maze"
    ]
};

export default createBespokeUtility(metadata);
