import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "task-prioritizer",
    "name": "Task Prioritizer",
    "category": "productivity & focus",
    "description": "A productivity & focus utility",
    "complexity": "advanced",
    "action": "prioritizer",
    "archetype": "coach",
    "domain": "Task",
    "intent": "Prioritizer gives targeted Task guidance with next actions.",
    "workflow": [
        "Assess task baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "task",
        "prioritizer"
    ]
};

export default createBespokeUtility(metadata);
