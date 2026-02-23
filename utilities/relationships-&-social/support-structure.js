import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "support-structure",
    "name": "Support Structure",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "structure",
    "archetype": "coach",
    "domain": "Support",
    "intent": "Structure gives targeted Support guidance with next actions.",
    "workflow": [
        "Assess support baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "support",
        "structure"
    ]
};

export default createBespokeUtility(metadata);
