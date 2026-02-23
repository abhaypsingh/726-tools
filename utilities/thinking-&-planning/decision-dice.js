import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "decision-dice",
    "name": "Decision Dice",
    "category": "thinking & planning",
    "description": "Make decisions using weighted random selection",
    "complexity": "intermediate",
    "action": "dice",
    "archetype": "coach",
    "domain": "Decision",
    "intent": "Dice gives targeted Decision guidance with next actions.",
    "workflow": [
        "Assess decision baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "decision",
        "dice"
    ]
};

export default createBespokeUtility(metadata);
