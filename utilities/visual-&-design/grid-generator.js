import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "grid-generator",
    "name": "Grid Generator",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "generator",
    "archetype": "generate",
    "domain": "Grid",
    "intent": "Generator creates concrete Grid outputs you can use immediately.",
    "workflow": [
        "Interpret grid direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "grid",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
