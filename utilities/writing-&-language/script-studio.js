import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "script-studio",
    "name": "Script Studio",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "creator",
    "archetype": "generate",
    "domain": "Script",
    "intent": "Creator creates concrete Script outputs you can use immediately.",
    "workflow": [
        "Interpret script direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "script",
        "studio"
    ]
};

export default createBespokeUtility(metadata);
