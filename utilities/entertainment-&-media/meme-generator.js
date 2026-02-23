import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "meme-generator",
    "name": "Meme Generator",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "generator",
    "archetype": "generate",
    "domain": "Meme",
    "intent": "Generator creates concrete Meme outputs you can use immediately.",
    "workflow": [
        "Interpret meme direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "meme",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
