import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "ui-designer",
    "name": "Ui Designer",
    "category": "visual & design",
    "description": "A visual & design utility",
    "complexity": "advanced",
    "action": "designer",
    "archetype": "generate",
    "domain": "Ui",
    "intent": "Designer creates concrete Ui outputs you can use immediately.",
    "workflow": [
        "Interpret ui direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "designer"
    ]
};

export default createBespokeUtility(metadata);
