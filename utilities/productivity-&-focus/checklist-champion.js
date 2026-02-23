import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "checklist-champion",
    "name": "Checklist Champion",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "champion",
    "archetype": "coach",
    "domain": "Checklist",
    "intent": "Champion gives targeted Checklist guidance with next actions.",
    "workflow": [
        "Assess checklist baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "checklist",
        "champion"
    ]
};

export default createBespokeUtility(metadata);
