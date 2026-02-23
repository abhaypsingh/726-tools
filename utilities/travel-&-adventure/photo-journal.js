import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "photo-journal",
    "name": "Photo Journal",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "journal",
    "archetype": "coach",
    "domain": "Photo",
    "intent": "Journal gives targeted Photo guidance with next actions.",
    "workflow": [
        "Assess photo baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "photo",
        "journal"
    ]
};

export default createBespokeUtility(metadata);
