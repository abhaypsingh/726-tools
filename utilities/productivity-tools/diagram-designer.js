import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "diagram-designer",
    "name": "Diagram Designer",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "designer",
    "archetype": "generate",
    "domain": "Diagram",
    "intent": "Designer creates concrete Diagram outputs you can use immediately.",
    "workflow": [
        "Interpret diagram direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "diagram",
        "designer"
    ]
};

export default createBespokeUtility(metadata);
