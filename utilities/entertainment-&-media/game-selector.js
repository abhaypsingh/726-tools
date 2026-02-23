import { createBespokeUtility } from '../_core/bespoke-utility-factory.js';

const metadata = {
    "id": "game-selector",
    "name": "Game Selector",
    "category": "entertainment & media",
    "description": "A entertainment & media utility",
    "complexity": "advanced",
    "action": "finder",
    "archetype": "explore",
    "domain": "Game",
    "intent": "Finder explores Game options and prioritizes the strongest paths.",
    "workflow": [
        "Frame game search",
        "Score candidate options",
        "Highlight tradeoffs",
        "Prioritize top opportunities"
    ],
    "inputHint": "List options, context, and selection criteria.",
    "focusTerms": [
        "game",
        "selector"
    ]
};

export default createBespokeUtility(metadata);
