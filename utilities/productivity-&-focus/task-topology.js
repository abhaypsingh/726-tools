import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "task-topology",
    "name": "Task Topology",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "topology",
    "archetype": "coach",
    "domain": "Task",
    "intent": "Topology gives targeted Task guidance with next actions.",
    "workflow": [
        "Assess task baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "task",
        "topology"
    ]
};

export default createBespokeUtility(metadata);
