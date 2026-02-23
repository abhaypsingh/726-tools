import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "delegation-designer",
    "name": "Delegation Designer",
    "category": "productivity & focus",
    "description": "A powerful tool for productivity & focus tasks",
    "complexity": "intermediate",
    "action": "designer",
    "archetype": "generate",
    "domain": "Delegation",
    "intent": "Designer creates concrete Delegation outputs you can use immediately.",
    "workflow": [
        "Interpret delegation direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "delegation",
        "designer"
    ]
};

export default createBespokeUtility(metadata);
