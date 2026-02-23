import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "flowchart-factory",
    "name": "Flowchart Factory",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "factory",
    "archetype": "coach",
    "domain": "Flowchart",
    "intent": "Factory gives targeted Flowchart guidance with next actions.",
    "workflow": [
        "Assess flowchart baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "flowchart",
        "factory"
    ]
};

export default createBespokeUtility(metadata);
