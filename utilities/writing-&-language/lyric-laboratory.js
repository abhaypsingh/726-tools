import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "lyric-laboratory",
    "name": "Lyric Laboratory",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "creator",
    "archetype": "generate",
    "domain": "Lyric",
    "intent": "Creator creates concrete Lyric outputs you can use immediately.",
    "workflow": [
        "Interpret lyric direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "lyric",
        "laboratory"
    ]
};

export default createBespokeUtility(metadata);
