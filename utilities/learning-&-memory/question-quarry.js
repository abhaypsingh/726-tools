import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "question-quarry",
    "name": "Question Quarry",
    "category": "learning & memory",
    "description": "A powerful tool for learning & memory tasks",
    "complexity": "intermediate",
    "action": "quarry",
    "archetype": "coach",
    "domain": "Question",
    "intent": "Quarry gives targeted Question guidance with next actions.",
    "workflow": [
        "Assess question baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "question",
        "quarry"
    ]
};

export default createBespokeUtility(metadata);
