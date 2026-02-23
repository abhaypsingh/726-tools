import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "mind-maze-mapper",
    "name": "🧠 Mind Maze Mapper",
    "category": "thinking & planning",
    "description": "Navigate the mental labyrinth of complex thoughts to find clarity and solutions",
    "complexity": "advanced",
    "action": "mapper",
    "archetype": "explore",
    "domain": "Mind Maze",
    "intent": "Mapper explores Mind Maze options and prioritizes the strongest paths.",
    "workflow": [
        "Frame mind maze search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "mind",
        "maze",
        "mapper"
    ]
};

export default createBespokeUtility(metadata);
