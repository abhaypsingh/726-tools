import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "delay-designer",
    "name": "Delay Designer",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "designer",
    "archetype": "generate",
    "domain": "Delay",
    "intent": "Designer creates concrete Delay outputs you can use immediately.",
    "workflow": [
        "Interpret delay direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "delay",
        "designer"
    ]
};

export default createBespokeUtility(metadata);
