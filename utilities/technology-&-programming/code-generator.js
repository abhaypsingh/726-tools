import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "code-generator",
    "name": "Code Generator",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "generator",
    "archetype": "generate",
    "domain": "Code",
    "intent": "Generator creates concrete Code outputs you can use immediately.",
    "workflow": [
        "Interpret code direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "code",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
