import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "filter-factory",
    "name": "Filter Factory",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "factory",
    "archetype": "coach",
    "domain": "Filter",
    "intent": "Factory gives targeted Filter guidance with next actions.",
    "workflow": [
        "Assess filter baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "filter",
        "factory"
    ]
};

export default createBespokeUtility(metadata);
