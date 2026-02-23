import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "debt-destroyer",
    "name": "Debt Destroyer",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "destroyer",
    "archetype": "coach",
    "domain": "Debt",
    "intent": "Destroyer gives targeted Debt guidance with next actions.",
    "workflow": [
        "Assess debt baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "debt",
        "destroyer"
    ]
};

export default createBespokeUtility(metadata);
