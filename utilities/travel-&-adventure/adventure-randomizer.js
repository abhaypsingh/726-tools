import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "adventure-randomizer",
    "name": "Adventure Randomizer",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "randomizer",
    "archetype": "coach",
    "domain": "Adventure",
    "intent": "Randomizer gives targeted Adventure guidance with next actions.",
    "workflow": [
        "Assess adventure baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "adventure",
        "randomizer"
    ]
};

export default createBespokeUtility(metadata);
