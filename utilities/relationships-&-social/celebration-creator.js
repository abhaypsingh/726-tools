import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "celebration-creator",
    "name": "Celebration Creator",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "creator",
    "archetype": "generate",
    "domain": "Celebration",
    "intent": "Creator creates concrete Celebration outputs you can use immediately.",
    "workflow": [
        "Interpret celebration direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "celebration",
        "creator"
    ]
};

export default createBespokeUtility(metadata);
