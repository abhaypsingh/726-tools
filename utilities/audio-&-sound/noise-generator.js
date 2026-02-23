import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "noise-generator",
    "name": "Noise Generator",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "generator",
    "archetype": "generate",
    "domain": "Noise",
    "intent": "Generator creates concrete Noise outputs you can use immediately.",
    "workflow": [
        "Interpret noise direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "noise",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
