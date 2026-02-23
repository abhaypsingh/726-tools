import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "habit-designer",
    "name": "Habit Designer",
    "category": "personal development",
    "description": "A personal development utility",
    "complexity": "advanced",
    "action": "designer",
    "archetype": "generate",
    "domain": "Habit",
    "intent": "Designer creates concrete Habit outputs you can use immediately.",
    "workflow": [
        "Interpret habit direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "habit",
        "designer"
    ]
};

export default createBespokeUtility(metadata);
