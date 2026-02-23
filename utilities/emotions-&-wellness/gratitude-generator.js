import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "gratitude-generator",
    "name": "Gratitude Generator",
    "category": "emotions & wellness",
    "description": "Generate gratitude lists across life categories",
    "complexity": "intermediate",
    "action": "generator",
    "archetype": "generate",
    "domain": "Gratitude",
    "intent": "Generator creates concrete Gratitude outputs you can use immediately.",
    "workflow": [
        "Interpret gratitude direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "gratitude",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
