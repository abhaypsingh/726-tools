import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "audio-loop-maker",
    "name": "Audio Loop Maker",
    "category": "audio & sound",
    "description": "A powerful tool for audio & sound tasks",
    "complexity": "intermediate",
    "action": "maker",
    "archetype": "generate",
    "domain": "Audio Loop",
    "intent": "Maker creates concrete Audio Loop outputs you can use immediately.",
    "workflow": [
        "Interpret audio loop direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "audio",
        "loop",
        "maker"
    ]
};

export default createBespokeUtility(metadata);
