import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "documentation-generator",
    "name": "Documentation Generator",
    "category": "technology & programming",
    "description": "A technology & programming utility",
    "complexity": "advanced",
    "action": "generator",
    "archetype": "generate",
    "domain": "Documentation",
    "intent": "Generator creates concrete Documentation outputs you can use immediately.",
    "workflow": [
        "Interpret documentation direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "documentation",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
