import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "service-directory",
    "name": "Service Directory",
    "category": "home & lifestyle",
    "description": "A powerful tool for home & lifestyle tasks",
    "complexity": "intermediate",
    "action": "directory",
    "archetype": "coach",
    "domain": "Service",
    "intent": "Directory gives targeted Service guidance with next actions.",
    "workflow": [
        "Assess service baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "service",
        "directory"
    ]
};

export default createBespokeUtility(metadata);
