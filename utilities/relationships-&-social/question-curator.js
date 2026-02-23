import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "question-curator",
    "name": "Question Curator",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "curator",
    "archetype": "coach",
    "domain": "Question",
    "intent": "Curator gives targeted Question guidance with next actions.",
    "workflow": [
        "Assess question baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "question",
        "curator"
    ]
};

export default createBespokeUtility(metadata);
