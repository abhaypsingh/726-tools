import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "gradient-generator",
    "name": "Gradient Generator",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "generator",
    "archetype": "generate",
    "domain": "Gradient",
    "intent": "Generator creates concrete Gradient outputs you can use immediately.",
    "workflow": [
        "Interpret gradient direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "gradient",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
