import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "data-detective",
    "name": "Data Detective",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "detective",
    "archetype": "coach",
    "domain": "Data",
    "intent": "Detective gives targeted Data guidance with next actions.",
    "workflow": [
        "Assess data baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "data",
        "detective"
    ]
};

export default createBespokeUtility(metadata);
