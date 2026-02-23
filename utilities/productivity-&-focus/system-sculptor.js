import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "system-sculptor",
    "name": "System Sculptor",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "designer",
    "archetype": "generate",
    "domain": "Productivity & Focus",
    "intent": "Designer creates concrete Productivity & Focus outputs you can use immediately.",
    "workflow": [
        "Interpret productivity & focus direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "system",
        "sculptor",
        "productivity",
        "focus"
    ]
};

export default createBespokeUtility(metadata);
