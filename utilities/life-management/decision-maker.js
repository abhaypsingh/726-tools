import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "decision-maker",
    "name": "Decision Maker",
    "category": "life management",
    "description": "A life management utility",
    "complexity": "advanced",
    "action": "maker",
    "archetype": "generate",
    "domain": "Decision",
    "intent": "Maker creates concrete Decision outputs you can use immediately.",
    "workflow": [
        "Interpret decision direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "decision",
        "maker"
    ]
};

export default createBespokeUtility(metadata);
