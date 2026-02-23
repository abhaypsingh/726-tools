import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "logo-laboratory",
    "name": "Logo Laboratory",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "creator",
    "archetype": "generate",
    "domain": "Logo",
    "intent": "Creator creates concrete Logo outputs you can use immediately.",
    "workflow": [
        "Interpret logo direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "logo",
        "laboratory"
    ]
};

export default createBespokeUtility(metadata);
