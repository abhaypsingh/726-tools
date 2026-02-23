import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "palette-physician",
    "name": "Palette Physician",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "physician",
    "archetype": "coach",
    "domain": "Palette",
    "intent": "Physician gives targeted Palette guidance with next actions.",
    "workflow": [
        "Assess palette baseline",
        "Find leverage points",
        "Design short feedback loops",
        "Set follow-up actions"
    ],
    "inputHint": "Describe current state, challenge, and desired outcome.",
    "focusTerms": [
        "palette",
        "physician"
    ]
};

export default createBespokeUtility(metadata);
