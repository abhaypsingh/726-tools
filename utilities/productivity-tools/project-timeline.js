import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "project-timeline",
    "name": "Project Timeline",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "timeline",
    "archetype": "coach",
    "domain": "Project",
    "intent": "Timeline gives targeted Project guidance with next actions.",
    "workflow": [
        "Assess project baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "project",
        "timeline"
    ]
};

export default createBespokeUtility(metadata);
