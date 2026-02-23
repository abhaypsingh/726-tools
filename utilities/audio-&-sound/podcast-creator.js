import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "podcast-creator",
    "name": "Podcast Creator",
    "category": "audio & sound",
    "description": "A audio & sound utility",
    "complexity": "advanced",
    "action": "creator",
    "archetype": "generate",
    "domain": "Podcast",
    "intent": "Creator creates concrete Podcast outputs you can use immediately.",
    "workflow": [
        "Interpret podcast direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "podcast",
        "creator"
    ]
};

export default createBespokeUtility(metadata);
