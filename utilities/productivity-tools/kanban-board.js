import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "kanban-board",
    "name": "Kanban Board",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "board",
    "archetype": "coach",
    "domain": "Kanban",
    "intent": "Board gives targeted Kanban guidance with next actions.",
    "workflow": [
        "Assess kanban baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "kanban",
        "board"
    ]
};

export default createBespokeUtility(metadata);
