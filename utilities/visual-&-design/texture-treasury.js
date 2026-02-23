import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "texture-treasury",
    "name": "Texture Treasury",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "treasury",
    "archetype": "coach",
    "domain": "Texture",
    "intent": "Treasury gives targeted Texture guidance with next actions.",
    "workflow": [
        "Assess texture baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "texture",
        "treasury"
    ]
};

export default createBespokeUtility(metadata);
