import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "graph-gallery",
    "name": "Graph Gallery",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "gallery",
    "archetype": "coach",
    "domain": "Graph",
    "intent": "Gallery gives targeted Graph guidance with next actions.",
    "workflow": [
        "Assess graph baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "graph",
        "gallery"
    ]
};

export default createBespokeUtility(metadata);
