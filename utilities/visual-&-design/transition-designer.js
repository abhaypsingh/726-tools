import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "transition-designer",
    "name": "Transition Designer",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "designer",
    "archetype": "generate",
    "domain": "Transition",
    "intent": "Designer creates concrete Transition outputs you can use immediately.",
    "workflow": [
        "Interpret transition direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "transition",
        "designer"
    ]
};

export default createBespokeUtility(metadata);
