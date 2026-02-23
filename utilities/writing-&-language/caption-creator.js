import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "caption-creator",
    "name": "Caption Creator",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "creator",
    "archetype": "generate",
    "domain": "Caption",
    "intent": "Creator creates concrete Caption outputs you can use immediately.",
    "workflow": [
        "Interpret caption direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "caption",
        "creator"
    ]
};

export default createBespokeUtility(metadata);
