import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "assumption-assassin",
    "name": "Assumption Assassin",
    "category": "thinking & planning",
    "description": "A powerful tool for thinking & planning tasks",
    "complexity": "advanced",
    "action": "assassin",
    "archetype": "coach",
    "domain": "Assumption",
    "intent": "Assassin gives targeted Assumption guidance with next actions.",
    "workflow": [
        "Assess assumption baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "assumption",
        "assassin"
    ]
};

export default createBespokeUtility(metadata);
