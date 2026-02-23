import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "geometry-generator",
    "name": "Geometry Generator",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "generator",
    "archetype": "generate",
    "domain": "Geometry",
    "intent": "Generator creates concrete Geometry outputs you can use immediately.",
    "workflow": [
        "Interpret geometry direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "geometry",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
