import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "random-fact",
    "name": "Random Fact",
    "category": "fun & games",
    "description": "A powerful tool for fun & games tasks",
    "complexity": "intermediate",
    "action": "fact",
    "archetype": "coach",
    "domain": "Random",
    "intent": "Fact gives targeted Random guidance with next actions.",
    "workflow": [
        "Assess random baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "random",
        "fact"
    ]
};

export default createBespokeUtility(metadata);
