import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "soundscape-designer",
    "name": "Soundscape Designer",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "designer",
    "archetype": "generate",
    "domain": "Soundscape",
    "intent": "Designer creates concrete Soundscape outputs you can use immediately.",
    "workflow": [
        "Interpret soundscape direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "soundscape",
        "designer"
    ]
};

export default createBespokeUtility(metadata);
