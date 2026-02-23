import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "workflow-weaver",
    "name": "Workflow Weaver",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "weaver",
    "archetype": "coach",
    "domain": "Workflow",
    "intent": "Weaver gives targeted Workflow guidance with next actions.",
    "workflow": [
        "Assess workflow baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "workflow",
        "weaver"
    ]
};

export default createBespokeUtility(metadata);
