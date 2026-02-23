import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "dietary-filter",
    "name": "Dietary Filter",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "filter",
    "archetype": "coach",
    "domain": "Dietary",
    "intent": "Filter gives targeted Dietary guidance with next actions.",
    "workflow": [
        "Assess dietary baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "dietary",
        "filter"
    ]
};

export default createBespokeUtility(metadata);
