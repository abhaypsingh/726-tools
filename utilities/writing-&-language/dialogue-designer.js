import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "dialogue-designer",
    "name": "Dialogue Designer",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "designer",
    "archetype": "generate",
    "domain": "Dialogue",
    "intent": "Designer creates concrete Dialogue outputs you can use immediately.",
    "workflow": [
        "Interpret dialogue direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "dialogue",
        "designer"
    ]
};

export default createBespokeUtility(metadata);
