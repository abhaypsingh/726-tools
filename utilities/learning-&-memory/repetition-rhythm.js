import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "repetition-rhythm",
    "name": "Repetition Rhythm",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "rhythm",
    "archetype": "coach",
    "domain": "Repetition",
    "intent": "Rhythm gives targeted Repetition guidance with next actions.",
    "workflow": [
        "Assess repetition baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "repetition",
        "rhythm"
    ]
};

export default createBespokeUtility(metadata);
