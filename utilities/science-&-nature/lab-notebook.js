import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "lab-notebook",
    "name": "Lab Notebook",
    "category": "science & nature",
    "description": "A science & nature utility",
    "complexity": "advanced",
    "action": "creator",
    "archetype": "generate",
    "domain": "Notebook",
    "intent": "Creator creates concrete Notebook outputs you can use immediately.",
    "workflow": [
        "Interpret notebook direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "lab",
        "notebook"
    ]
};

export default createBespokeUtility(metadata);
