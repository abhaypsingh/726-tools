import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "growth-gauge",
    "name": "Growth Gauge",
    "category": "emotions & wellness",
    "description": "A powerful tool for emotions & wellness tasks",
    "complexity": "intermediate",
    "action": "gauge",
    "archetype": "coach",
    "domain": "Growth",
    "intent": "Gauge gives targeted Growth guidance with next actions.",
    "workflow": [
        "Assess growth baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "growth",
        "gauge"
    ]
};

export default createBespokeUtility(metadata);
