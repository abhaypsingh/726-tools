import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "leaderboard-maker",
    "name": "Leaderboard Maker",
    "category": "productivity tools",
    "description": "A powerful tool for productivity tools tasks",
    "complexity": "intermediate",
    "action": "maker",
    "archetype": "generate",
    "domain": "Leaderboard",
    "intent": "Maker creates concrete Leaderboard outputs you can use immediately.",
    "workflow": [
        "Interpret leaderboard direction",
        "Generate option set",
        "Refine top candidates",
        "Return usable outputs"
    ],
    "inputHint": "Describe style, constraints, and desired output.",
    "focusTerms": [
        "leaderboard",
        "maker"
    ]
};

export default createBespokeUtility(metadata);
