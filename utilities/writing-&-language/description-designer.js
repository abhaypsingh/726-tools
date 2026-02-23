import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "description-designer",
    "name": "Description Designer",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "designer",
    "archetype": "generate",
    "domain": "Description",
    "intent": "Designer creates concrete Description outputs you can use immediately.",
    "workflow": [
        "Interpret description direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "description",
        "designer"
    ]
};

export default createBespokeUtility(metadata);
