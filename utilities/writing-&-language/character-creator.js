import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "character-creator",
    "name": "Character Creator",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "creator",
    "archetype": "generate",
    "domain": "Character",
    "intent": "Creator creates concrete Character outputs you can use immediately.",
    "workflow": [
        "Interpret character direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "character",
        "creator"
    ]
};

export default createBespokeUtility(metadata);
