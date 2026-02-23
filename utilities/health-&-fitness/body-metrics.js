import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "body-metrics",
    "name": "Body Metrics",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "metrics",
    "archetype": "coach",
    "domain": "Body",
    "intent": "Metrics gives targeted Body guidance with next actions.",
    "workflow": [
        "Assess body baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "body",
        "metrics"
    ]
};

export default createBespokeUtility(metadata);
