import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "data-visualizer",
    "name": "Data Visualizer",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "visualizer",
    "archetype": "coach",
    "domain": "Data",
    "intent": "Visualizer gives targeted Data guidance with next actions.",
    "workflow": [
        "Assess data baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "data",
        "visualizer"
    ]
};

export default createBespokeUtility(metadata);
