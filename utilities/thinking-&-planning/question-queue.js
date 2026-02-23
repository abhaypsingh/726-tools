import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "question-queue",
    "name": "❓ Question Queue",
    "category": "thinking & planning",
    "description": "Organize your curiosities and questions for systematic exploration",
    "complexity": "advanced",
    "action": "queue",
    "archetype": "coach",
    "domain": "Question",
    "intent": "Queue gives targeted Question guidance with next actions.",
    "workflow": [
        "Assess question baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "question",
        "queue"
    ]
};

export default createBespokeUtility(metadata);
