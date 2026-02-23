import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "deadline-designer",
    "name": "Deadline Designer",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "designer",
    "archetype": "generate",
    "domain": "Deadline",
    "intent": "Designer creates concrete Deadline outputs you can use immediately.",
    "workflow": [
        "Interpret deadline direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "deadline",
        "designer"
    ]
};

export default createBespokeUtility(metadata);
