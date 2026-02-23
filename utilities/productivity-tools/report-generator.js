import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "report-generator",
    "name": "Report Generator",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "generator",
    "archetype": "generate",
    "domain": "Report",
    "intent": "Generator creates concrete Report outputs you can use immediately.",
    "workflow": [
        "Interpret report direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "report",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
