import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "speech-sculptor",
    "name": "Speech Sculptor",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "designer",
    "archetype": "generate",
    "domain": "Speech",
    "intent": "Designer creates concrete Speech outputs you can use immediately.",
    "workflow": [
        "Interpret speech direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "speech",
        "sculptor"
    ]
};

export default createBespokeUtility(metadata);
