import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "travel-journal-prompts",
    "name": "Travel Journal Prompts",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "prompts",
    "archetype": "coach",
    "domain": "Travel Journal",
    "intent": "Prompts gives targeted Travel Journal guidance with next actions.",
    "workflow": [
        "Assess travel journal baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "travel",
        "journal",
        "prompts"
    ]
};

export default createBespokeUtility(metadata);
