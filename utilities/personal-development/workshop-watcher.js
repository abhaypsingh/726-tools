import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "workshop-watcher",
    "name": "Workshop Watcher",
    "category": "personal development",
    "description": "A powerful tool for personal development tasks",
    "complexity": "intermediate",
    "action": "creator",
    "archetype": "generate",
    "domain": "Watcher",
    "intent": "Creator creates concrete Watcher outputs you can use immediately.",
    "workflow": [
        "Interpret watcher direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "workshop",
        "watcher"
    ]
};

export default createBespokeUtility(metadata);
