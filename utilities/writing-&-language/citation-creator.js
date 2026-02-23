import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "citation-creator",
    "name": "Citation Creator",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "creator",
    "archetype": "generate",
    "domain": "Citation",
    "intent": "Creator creates concrete Citation outputs you can use immediately.",
    "workflow": [
        "Interpret citation direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "citation",
        "creator"
    ]
};

export default createBespokeUtility(metadata);
