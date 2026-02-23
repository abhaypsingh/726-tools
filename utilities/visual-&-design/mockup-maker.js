import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mockup-maker",
    "name": "Mockup Maker",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "maker",
    "archetype": "generate",
    "domain": "Mockup",
    "intent": "Maker creates concrete Mockup outputs you can use immediately.",
    "workflow": [
        "Interpret mockup direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "mockup",
        "maker"
    ]
};

export default createBespokeUtility(metadata);
