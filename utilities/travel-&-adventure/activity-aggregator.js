import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "activity-aggregator",
    "name": "Activity Aggregator",
    "category": "travel & adventure",
    "description": "A powerful tool for travel & adventure tasks",
    "complexity": "intermediate",
    "action": "aggregator",
    "archetype": "coach",
    "domain": "Activity",
    "intent": "Aggregator gives targeted Activity guidance with next actions.",
    "workflow": [
        "Assess activity baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "activity",
        "aggregator"
    ]
};

export default createBespokeUtility(metadata);
