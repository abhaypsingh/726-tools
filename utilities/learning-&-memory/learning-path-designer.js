import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "learning-path-designer",
    "name": "Learning Path Designer",
    "category": "learning & memory",
    "description": "Design learning paths",
    "complexity": "intermediate",
    "action": "designer",
    "archetype": "generate",
    "domain": "Learning Path",
    "intent": "Designer creates concrete Learning Path outputs you can use immediately.",
    "workflow": [
        "Interpret learning path direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "learning",
        "path",
        "designer"
    ]
};

export default createBespokeUtility(metadata);
