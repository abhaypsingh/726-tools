import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "travel-game-collection",
    "name": "Travel Game Collection",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "collection",
    "archetype": "coach",
    "domain": "Travel Game",
    "intent": "Collection gives targeted Travel Game guidance with next actions.",
    "workflow": [
        "Assess travel game baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "travel",
        "game",
        "collection"
    ]
};

export default createBespokeUtility(metadata);
