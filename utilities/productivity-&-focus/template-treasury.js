import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "template-treasury",
    "name": "Template Treasury",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "treasury",
    "archetype": "coach",
    "domain": "Template",
    "intent": "Treasury gives targeted Template guidance with next actions.",
    "workflow": [
        "Assess template baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "template",
        "treasury"
    ]
};

export default createBespokeUtility(metadata);
