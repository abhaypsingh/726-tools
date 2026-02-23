import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "joke-generator",
    "name": "Joke Generator",
    "category": "fun & games",
    "description": "A powerful tool for fun & games tasks",
    "complexity": "intermediate",
    "action": "generator",
    "archetype": "generate",
    "domain": "Joke",
    "intent": "Generator creates concrete Joke outputs you can use immediately.",
    "workflow": [
        "Interpret joke direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "joke",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
