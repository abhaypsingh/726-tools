import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "purpose-pathfinder",
    "name": "Purpose Pathfinder",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "pathfinder",
    "archetype": "coach",
    "domain": "Purpose",
    "intent": "Pathfinder gives targeted Purpose guidance with next actions.",
    "workflow": [
        "Assess purpose baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "purpose",
        "pathfinder"
    ]
};

export default createBespokeUtility(metadata);
