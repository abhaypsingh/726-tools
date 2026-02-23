import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "interior-designer",
    "name": "Interior Designer",
    "category": "home & lifestyle",
    "description": "A home & lifestyle utility",
    "complexity": "advanced",
    "action": "designer",
    "archetype": "generate",
    "domain": "Interior",
    "intent": "Designer creates concrete Interior outputs you can use immediately.",
    "workflow": [
        "Interpret interior direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "interior",
        "designer"
    ]
};

export default createBespokeUtility(metadata);
