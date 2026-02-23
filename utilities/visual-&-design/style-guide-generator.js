import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "style-guide-generator",
    "name": "Style Guide Generator",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "generator",
    "archetype": "generate",
    "domain": "Style",
    "intent": "Generator creates concrete Style outputs you can use immediately.",
    "workflow": [
        "Interpret style direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "style",
        "guide",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
