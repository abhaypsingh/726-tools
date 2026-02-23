import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "memory-maker",
    "name": "Memory Maker",
    "category": "relationships & social",
    "description": "A powerful tool for relationships & social tasks",
    "complexity": "intermediate",
    "action": "maker",
    "archetype": "generate",
    "domain": "Memory",
    "intent": "Maker creates concrete Memory outputs you can use immediately.",
    "workflow": [
        "Interpret memory direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "memory",
        "maker"
    ]
};

export default createBespokeUtility(metadata);
