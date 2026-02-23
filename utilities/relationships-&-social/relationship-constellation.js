import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "relationship-constellation",
    "name": "Relationship Constellation",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "constellation",
    "archetype": "coach",
    "domain": "Relationship",
    "intent": "Constellation gives targeted Relationship guidance with next actions.",
    "workflow": [
        "Assess relationship baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "relationship",
        "constellation"
    ]
};

export default createBespokeUtility(metadata);
