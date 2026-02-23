import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "compound-interest",
    "name": "Compound Interest",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "interest",
    "archetype": "coach",
    "domain": "Compound",
    "intent": "Interest gives targeted Compound guidance with next actions.",
    "workflow": [
        "Assess compound baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "compound",
        "interest"
    ]
};

export default createBespokeUtility(metadata);
