import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "statistics-storyteller",
    "name": "Statistics Storyteller",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "storyteller",
    "archetype": "coach",
    "domain": "Statistics",
    "intent": "Storyteller gives targeted Statistics guidance with next actions.",
    "workflow": [
        "Assess statistics baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "statistics",
        "storyteller"
    ]
};

export default createBespokeUtility(metadata);
