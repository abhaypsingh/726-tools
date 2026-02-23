import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "game-creator",
    "name": "Game Creator",
    "category": "fun & games",
    "description": "A fun & games utility",
    "complexity": "advanced",
    "action": "creator",
    "archetype": "generate",
    "domain": "Game",
    "intent": "Creator creates concrete Game outputs you can use immediately.",
    "workflow": [
        "Interpret game direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "game",
        "creator"
    ]
};

export default createBespokeUtility(metadata);
