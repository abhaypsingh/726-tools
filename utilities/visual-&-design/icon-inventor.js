import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "icon-inventor",
    "name": "Icon Inventor",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "inventor",
    "archetype": "coach",
    "domain": "Icon",
    "intent": "Inventor gives targeted Icon guidance with next actions.",
    "workflow": [
        "Assess icon baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "icon",
        "inventor"
    ]
};

export default createBespokeUtility(metadata);
