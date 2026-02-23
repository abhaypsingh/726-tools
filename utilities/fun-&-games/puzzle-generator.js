import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "puzzle-generator",
    "name": "Puzzle Generator",
    "category": "fun & games",
    "description": "A fun & games utility",
    "complexity": "advanced",
    "action": "generator",
    "archetype": "generate",
    "domain": "Puzzle",
    "intent": "Generator creates concrete Puzzle outputs you can use immediately.",
    "workflow": [
        "Interpret puzzle direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "puzzle",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
