import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "sequence-sculptor",
    "name": "Sequence Sculptor",
    "category": "math & logic",
    "description": "A powerful tool for math & logic tasks",
    "complexity": "intermediate",
    "action": "designer",
    "archetype": "generate",
    "domain": "Sequence",
    "intent": "Designer creates concrete Sequence outputs you can use immediately.",
    "workflow": [
        "Interpret sequence direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "sequence",
        "sculptor"
    ]
};

export default createBespokeUtility(metadata);
