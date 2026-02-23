import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "rhythm-generator",
    "name": "Rhythm Generator",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "generator",
    "archetype": "generate",
    "domain": "Rhythm",
    "intent": "Generator creates concrete Rhythm outputs you can use immediately.",
    "workflow": [
        "Interpret rhythm direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "rhythm",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
