import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "emergency-fund",
    "name": "Emergency Fund",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "fund",
    "archetype": "coach",
    "domain": "Emergency",
    "intent": "Fund gives targeted Emergency guidance with next actions.",
    "workflow": [
        "Assess emergency baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "emergency",
        "fund"
    ]
};

export default createBespokeUtility(metadata);
