import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "gift-idea-generator",
    "name": "Gift Idea Generator",
    "category": "life management",
    "description": "A powerful tool for life management tasks",
    "complexity": "intermediate",
    "action": "generator",
    "archetype": "generate",
    "domain": "Gift Idea",
    "intent": "Generator creates concrete Gift Idea outputs you can use immediately.",
    "workflow": [
        "Interpret gift idea direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "gift",
        "idea",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
