import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "shadow-sculptor",
    "name": "Shadow Sculptor",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "designer",
    "archetype": "generate",
    "domain": "Shadow",
    "intent": "Designer creates concrete Shadow outputs you can use immediately.",
    "workflow": [
        "Interpret shadow direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "shadow",
        "sculptor"
    ]
};

export default createBespokeUtility(metadata);
