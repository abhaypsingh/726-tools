import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "hydration-harmonizer",
    "name": "Hydration Harmonizer",
    "category": "health & fitness",
    "description": "A powerful tool for health & fitness tasks",
    "complexity": "intermediate",
    "action": "harmonizer",
    "archetype": "coach",
    "domain": "Hydration",
    "intent": "Harmonizer gives targeted Hydration guidance with next actions.",
    "workflow": [
        "Assess hydration baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "hydration",
        "harmonizer"
    ]
};

export default createBespokeUtility(metadata);
