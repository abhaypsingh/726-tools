import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "symmetry-studio",
    "name": "Symmetry Studio",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "creator",
    "archetype": "generate",
    "domain": "Symmetry",
    "intent": "Creator creates concrete Symmetry outputs you can use immediately.",
    "workflow": [
        "Interpret symmetry direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "symmetry",
        "studio"
    ]
};

export default createBespokeUtility(metadata);
