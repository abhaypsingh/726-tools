import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mood-board-maker",
    "name": "Mood Board Maker",
    "category": "visual & design",
    "description": "A powerful tool for visual & design tasks",
    "complexity": "intermediate",
    "action": "maker",
    "archetype": "generate",
    "domain": "Mood Board",
    "intent": "Maker creates concrete Mood Board outputs you can use immediately.",
    "workflow": [
        "Interpret mood board direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "mood",
        "board",
        "maker"
    ]
};

export default createBespokeUtility(metadata);
