import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "contract-generator",
    "name": "Contract Generator",
    "category": "business & entrepreneurship",
    "description": "A business & entrepreneurship utility",
    "complexity": "beginner",
    "action": "generator",
    "archetype": "generate",
    "domain": "Contract",
    "intent": "Generator creates concrete Contract outputs you can use immediately.",
    "workflow": [
        "Interpret contract direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "contract",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
