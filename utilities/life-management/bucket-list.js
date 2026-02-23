import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "bucket-list",
    "name": "Bucket List",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "list",
    "archetype": "coach",
    "domain": "Bucket",
    "intent": "List gives targeted Bucket guidance with next actions.",
    "workflow": [
        "Assess bucket baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "bucket",
        "list"
    ]
};

export default createBespokeUtility(metadata);
