import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "letter-lab",
    "name": "Letter Lab",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "creator",
    "archetype": "generate",
    "domain": "Letter",
    "intent": "Creator creates concrete Letter outputs you can use immediately.",
    "workflow": [
        "Interpret letter direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "letter",
        "lab"
    ]
};

export default createBespokeUtility(metadata);
