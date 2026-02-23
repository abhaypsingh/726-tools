import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "priority-matrix",
    "name": "Priority Matrix",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "matrix",
    "archetype": "coach",
    "domain": "Priority",
    "intent": "Matrix gives targeted Priority guidance with next actions.",
    "workflow": [
        "Assess priority baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "priority",
        "matrix"
    ]
};

export default createBespokeUtility(metadata);
