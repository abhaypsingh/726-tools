import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "financial-goals",
    "name": "Financial Goals",
    "category": "finance & money",
    "description": "A powerful tool for finance & money tasks",
    "complexity": "intermediate",
    "action": "goals",
    "archetype": "coach",
    "domain": "Financial",
    "intent": "Goals gives targeted Financial guidance with next actions.",
    "workflow": [
        "Assess financial baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "financial",
        "goals"
    ]
};

export default createBespokeUtility(metadata);
