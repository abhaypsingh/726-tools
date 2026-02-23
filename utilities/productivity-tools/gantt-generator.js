import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "gantt-generator",
    "name": "Gantt Generator",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "generator",
    "archetype": "generate",
    "domain": "Gantt",
    "intent": "Generator creates concrete Gantt outputs you can use immediately.",
    "workflow": [
        "Interpret gantt direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "gantt",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
