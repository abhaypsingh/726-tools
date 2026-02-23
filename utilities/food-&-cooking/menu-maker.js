import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "menu-maker",
    "name": "Menu Maker",
    "category": "food & cooking",
    "description": "A powerful tool for food & cooking tasks",
    "complexity": "intermediate",
    "action": "maker",
    "archetype": "generate",
    "domain": "Menu",
    "intent": "Maker creates concrete Menu outputs you can use immediately.",
    "workflow": [
        "Interpret menu direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "menu",
        "maker"
    ]
};

export default createBespokeUtility(metadata);
