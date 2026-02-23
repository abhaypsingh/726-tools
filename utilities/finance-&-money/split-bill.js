import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "split-bill",
    "name": "Split Bill",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "bill",
    "archetype": "coach",
    "domain": "Split",
    "intent": "Bill gives targeted Split guidance with next actions.",
    "workflow": [
        "Assess split baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "split",
        "bill"
    ]
};

export default createBespokeUtility(metadata);
