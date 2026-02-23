import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "review-schedule-generator",
    "name": "Review Schedule Generator",
    "category": "learning & memory",
    "description": "Generate review schedules",
    "complexity": "intermediate",
    "action": "generator",
    "archetype": "generate",
    "domain": "Review Schedule",
    "intent": "Generator creates concrete Review Schedule outputs you can use immediately.",
    "workflow": [
        "Interpret review schedule direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "review",
        "schedule",
        "generator"
    ]
};

export default createBespokeUtility(metadata);
