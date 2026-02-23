import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "trust-thermometer",
    "name": "Trust Thermometer",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "thermometer",
    "archetype": "coach",
    "domain": "Trust",
    "intent": "Thermometer gives targeted Trust guidance with next actions.",
    "workflow": [
        "Assess trust baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "trust",
        "thermometer"
    ]
};

export default createBespokeUtility(metadata);
