import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "style-sculptor",
    "name": "Style Sculptor",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "designer",
    "archetype": "generate",
    "domain": "Style",
    "intent": "Designer creates concrete Style outputs you can use immediately.",
    "workflow": [
        "Interpret style direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "style",
        "sculptor"
    ]
};

export default createBespokeUtility(metadata);
