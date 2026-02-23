import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "animation-creator",
    "name": "Animation Creator",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "creator",
    "archetype": "generate",
    "domain": "Animation",
    "intent": "Creator creates concrete Animation outputs you can use immediately.",
    "workflow": [
        "Interpret animation direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "animation",
        "creator"
    ]
};

export default createBespokeUtility(metadata);
