import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "doodle-prompt",
    "name": "Doodle Prompt",
    "category": "fun & games",
    "description": "A powerful tool for fun & games tasks",
    "complexity": "intermediate",
    "action": "prompt",
    "archetype": "coach",
    "domain": "Doodle",
    "intent": "Prompt gives targeted Doodle guidance with next actions.",
    "workflow": [
        "Assess doodle baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "doodle",
        "prompt"
    ]
};

export default createBespokeUtility(metadata);
