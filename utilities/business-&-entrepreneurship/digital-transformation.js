import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "digital-transformation",
    "name": "Digital Transformation",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "transformation",
    "archetype": "coach",
    "domain": "Digital",
    "intent": "Transformation gives targeted Digital guidance with next actions.",
    "workflow": [
        "Assess digital baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "digital",
        "transformation"
    ]
};

export default createBespokeUtility(metadata);
