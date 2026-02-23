import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "metaphor-maker",
    "name": "Metaphor Maker",
    "category": "writing & language",
    "description": "A powerful tool for writing & language tasks",
    "complexity": "intermediate",
    "action": "maker",
    "archetype": "generate",
    "domain": "Metaphor",
    "intent": "Maker creates concrete Metaphor outputs you can use immediately.",
    "workflow": [
        "Interpret metaphor direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "metaphor",
        "maker"
    ]
};

export default createBespokeUtility(metadata);
