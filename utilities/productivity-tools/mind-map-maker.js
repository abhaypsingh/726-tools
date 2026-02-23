import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mind-map-maker",
    "name": "Mind Map Maker",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "maker",
    "archetype": "generate",
    "domain": "Mind Map",
    "intent": "Maker creates concrete Mind Map outputs you can use immediately.",
    "workflow": [
        "Interpret mind map direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "mind",
        "map",
        "maker"
    ]
};

export default createBespokeUtility(metadata);
