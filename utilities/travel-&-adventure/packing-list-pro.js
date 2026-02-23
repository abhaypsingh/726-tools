import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "packing-list-pro",
    "name": "Packing List Pro",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "pro",
    "archetype": "coach",
    "domain": "Packing List",
    "intent": "Pro gives targeted Packing List guidance with next actions.",
    "workflow": [
        "Assess packing list baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "packing",
        "list"
    ]
};

export default createBespokeUtility(metadata);
